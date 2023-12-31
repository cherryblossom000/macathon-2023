import {writeFile} from 'node:fs/promises'
import {parse} from 'node-html-parser'
import type {
	CourseRequirement,
	RequisiteType,
	TeachingPeriod,
	Unit,
	UnitCode,
	UnitRequirement,
} from 'shared'

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
	title: string,
	units: readonly CurriculumStructureRelationship[] = [],
	description?: string,
): CourseRequirement => ({
	title,
	requirement: {
		// hacky workaround for incorrect data
		operator: description?.includes('one of the following')
			? 'OR'
			: (groups[0] ?? units[0])?.parent_connector.value ?? 'AND',
		items: [
			...groups.map(g =>
				parseCourseRequirement(
					g.container,
					g.title,
					g.relationship,
					g.description,
				),
			),
			...units.map(u => u.academic_item_code),
		],
	} as CourseRequirement['requirement'],
})

// const courses = await Promise.all(
// 	courseCodes.map(async (code): Promise<Course> => {
// 		const {title, abbreviated_name, curriculumStructure} =
// 			await getNextJSData<CourseResponse>(`courses/${code}`)

// 		return {
// 			code,
// 			title,
// 			abbreviatedName: abbreviated_name,
// 			requirement: parseCourseRequirement(curriculumStructure.container, title),
// 		}
// 	}),
// )

const getUnits = ({requirement}: CourseRequirement): UnitCode[] =>
	requirement.items.flatMap(item =>
		typeof item === 'string' ? item : getUnits(item),
	)

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
			value: TeachingPeriod
		}
	}[]
	enrolment_rules: {description: string}[]
	requisites: {
		requisite_type: {value: RequisiteType}
		container: UnitRequisiteContainer[]
	}[]
	handbook_synopsis: string
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
	] as UnitRequirement[],
})

console.log('done courses')

const seq = async <T>(xs: readonly Promise<T>[]): Promise<T[]> => {
	const r: T[] = []
	for (const x of xs) r.push(await x)
	return r
}

const dataDir = new URL('../data/', import.meta.url)
const rawDir = new URL('../raw/', import.meta.url)

const fetchUnit = async (code: UnitCode): Promise<void> => {
	// console.log(code)
	const rawData = await getNextJSData<UnitResponse>(`units/${code}`)
	const {title, unit_offering, enrolment_rules, requisites, handbook_synopsis} =
		rawData
	const offerings = unit_offering?.filter(o => o.location.value === 'Clayton')
	if (!offerings?.length) {
		console.log(`${code} not offered in Clayton`)
		return
	}
	const unit: Unit = {
		code,
		title,
		offerings: offerings.map(o => o.teaching_period.value),
		enrolmentRules: enrolment_rules.map(x => x.description),
		requisites: requisites.map(r => ({
			type: r.requisite_type.value,
			requirement: {
				operator: 'AND',
				items: r.container.map(parseUnitRequirement),
			},
		})),
		description: handbook_synopsis,
	}
	const path = `units/${code}.json`
	await Promise.all([
		writeFile(new URL(path, dataDir), JSON.stringify(unit, null, '\t')),
		writeFile(new URL(path, rawDir), JSON.stringify(rawData, null, '\t')),
	])
}

await Promise.all([
	// ...courses.map(async course =>
	// 	writeFile(
	// 		new URL(`courses/${course.code}.json`, dir),
	// 		JSON.stringify(course, null, '\t'),
	// 	),
	// ),
	Promise.all(
		[
			...[
				1006, 1008, 1013, 1033, 1043, 1045, 1046, 1047, 1048, 1049, 1050, 1051,
				1052, 1053, 1054, 1055, 1056, 1073, 2001, 2002, 2004, 2014, 2032, 2073,
				2081, 2082, 2083, 2085, 2086, 2087, 2090, 2091, 2092, 2093, 2094, 2095,
				2096, 2097, 2098, 2099, 2100, 2101, 2102, 2104, 2105, 2107, 2108, 2145,
				2169, 3003, 3031, 3039, 3040, 3045, 3047, 3048, 3077, 3080, 3081, 3094,
				3097, 3098, 3134, 3138, 3139, 3143, 3144, 3145, 3146, 3152, 3154, 3155,
				3157, 3158, 3159, 3161, 3162, 3163, 3164, 3165, 3168, 3169, 3170, 3171,
				3172, 3173, 3174, 3175, 3176, 3178, 3179, 3180, 3181, 3182, 3183, 3187,
			].map(n => `FIT${n}`),
			'MAT1830',
			'MAT1841',
		]
			// [...new Set(courses.flatMap(c => getUnits(c.requirement)))]
			// 	.filter(code => code !== 'COMPSCI03' && code !== 'DATASCI01')
			.map(fetchUnit),
	),
])
