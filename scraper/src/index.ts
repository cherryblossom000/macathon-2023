import {writeFile} from 'node:fs/promises'
import {parse} from 'node-html-parser'

const courseCodes = ['C2001'] as const

const getNextJSData = <T>(path: string): Promise<T> =>
	fetch(`https://handbook.monash.edu/2023/${path}`)
		.then(res => res.text())
		.then(parse)
		.then(
			document =>
				(
					JSON.parse(document.getElementById('__NEXT_DATA__').textContent) as {
						props: {pageProps: {pageContent: T}}
					}
				).props.pageProps.pageContent,
		)

interface Connector {
	value: 'AND' | 'OR'
}

interface CurriculumStructureRelationship {
	parent_connector: Connector
	/** e.g. `FIT1045` */
	academic_item_code: string
}

interface CurriculumStructureContainer {
	/** e.g. `Part A. Foundational computer science study` */
	title: string
	parent_connector: Connector
	relationship: CurriculumStructureRelationship[]
	container: CurriculumStructureContainer[]
	description: string
}

interface CourseResponse {
	/** e.g. `C2001` */
	code: string
	/** e.g. `Bachelor of Computer Science` */
	title: string
	/** e.g. `BCompSci` */
	abbreviated_name: string
	curriculumStructure: {
		container: CurriculumStructureContainer[]
	}
}

const parseCourseRequirement = (
	groups: readonly CurriculumStructureContainer[],
	units: readonly CurriculumStructureRelationship[] = [],
	title?: string,
	description?: string,
): CourseRequirement => ({
	title,
	requirement:
		groups.length || units.length
			? {
					// hacky workaround for incorrect data
					operator: description?.includes('one of the following')
						? 'OR'
						: (groups[0] ?? units[0])!.parent_connector.value,
					items: [
						...groups.map(g =>
							parseCourseRequirement(
								g.container,
								g.relationship,
								g.title,
								g.description,
							),
						),
						...units.map(u => u.academic_item_code),
					],
			  }
			: undefined,
})

interface HandbookThing {
	code: string
	title: string
}

type UnitCode = string

interface CourseRequirement {
	title?: string | undefined
	requirement?:
		| {
				operator: 'AND' | 'OR'
				items: (UnitCode | CourseRequirement)[]
		  }
		| undefined
}

interface Course extends HandbookThing {
	requirement: CourseRequirement
	abbreviatedName: string
}

const courses = await Promise.all(
	courseCodes.map(async (code): Promise<Course> => {
		const {title, abbreviated_name, curriculumStructure} =
			await getNextJSData<CourseResponse>(`courses/${code}`)

		return {
			code,
			title,
			abbreviatedName: abbreviated_name,
			requirement: parseCourseRequirement(curriculumStructure.container),
		}
	}),
)

const getUnits = ({requirement}: CourseRequirement): UnitCode[] =>
	requirement?.items.flatMap(item =>
		typeof item === 'string' ? item : getUnits(item),
	) ?? []

interface UnitRequisiteRelationship {
	/** e.g. `FIT1045` */
	academic_item_code: string
}

type UnitRequisiteContainer = {
	parent_connector: Connector
} & (
	| {container: UnitRequisiteContainer[]}
	| {containers: UnitRequisiteContainer[]}
) &
	(
		| {relationship: UnitRequisiteRelationship[]}
		| {relationships: UnitRequisiteRelationship[]}
	)

type RequisiteType = 'prerequisite' | 'prohibitions'

type Offering =
	| 'First semester'
	| 'Second semester'
	| 'November teaching period'
	| 'Summer semester A'
	| 'Summer semester B'

interface UnitResponse {
	title: string
	unit_code: string
	unit_offering?: {
		/** e.g `S2-01-CLAYTON-ON-CAMPUS` */
		display_name: string
		location: {
			/** e.g `Clayton` or `Malaysia` */
			value: string
		}
		teaching_period: {
			value: Offering
		}
	}[]
	requisites: {
		requisite_type: {value: RequisiteType}
		container: UnitRequisiteContainer[]
	}[]
}

interface UnitRequirement {
	operator: 'AND' | 'OR'
	items: (UnitCode | UnitRequirement)[]
}

interface Requisite {
	type: RequisiteType
	requirement: UnitRequirement
}

interface Unit extends HandbookThing {
	offerings: Offering[]
	requisites: Requisite[]
}

const parseUnitRequirement = (
	group: UnitRequisiteContainer,
): UnitRequirement => ({
	operator: group.parent_connector.value,
	items: [
		...('container' in group ? group.container : group.containers).map(
			parseUnitRequirement,
		),
		...('relationship' in group ? group.relationship : group.relationships).map(
			u => u.academic_item_code,
		),
	],
})

console.log('done courses')

const seq = async <T>(xs: readonly T[]): Promise<Awaited<T>[]> => {
	const r: Awaited<T>[] = []
	for (const x of xs) r.push(await x)
	return r
}

const units = await seq(
	[...new Set(courses.flatMap(c => getUnits(c.requirement)))]
		.filter(code => code !== 'COMPSCI03' && code !== 'DATASCI01')
		.map(async (code): Promise<Unit> => {
			console.log(code)
			const {title, unit_offering, requisites} =
				await getNextJSData<UnitResponse>(`units/${code}`)
			return {
				code,
				title,
				offerings:
					unit_offering?.flatMap(o =>
						o.location.value === 'Clayton' ? [o.teaching_period.value] : [],
					) ?? [],
				requisites: requisites.map(r => ({
					type: r.requisite_type.value,
					requirement: {
						operator: 'AND',
						items: r.container.map(parseUnitRequirement),
					},
				})),
			}
		}),
)

const dir = new URL('../data/', import.meta.url)

await Promise.all([
	...courses.map(async course =>
		writeFile(
			new URL(`courses/${course.code}.json`, dir),
			JSON.stringify(course, null, '\t'),
		),
	),
	...units.map(async unit =>
		writeFile(
			new URL(`units/${unit.code}.json`, dir),
			JSON.stringify(unit, null, '\t'),
		),
	),
])
