export type RequisiteType = 'prerequisite' | 'prohibitions'

export type TeachingPeriod =
	| 'First semester'
	| 'Second semester'
	| 'November teaching period'
	| 'Summer semester A'
	| 'Summer semester B'

/**
 * the `2` is because in the data science spec you need to do 2 out of some
 * specified L3 units (so it's basically 2 of the following, whereas `OR` is 1 of
 * the following)
 */
export type Operator = 'AND' | 'OR' | 2

interface HandbookThing {
	code: string
	title: string
}

export type UnitCode = string

export interface CourseRequirement {
	title: string
	requirement: {
		operator: Operator
	} & (
		| {
				items: UnitCode[]
		  }
		| {
				items: CourseRequirement[]
		  }
	)
}

export interface Course extends HandbookThing {
	requirement: CourseRequirement
	abbreviatedName: string
}

export interface UnitRequirement {
	operator: Operator
	items: (UnitCode | UnitRequirement)[]
}

export interface Requisite {
	type: RequisiteType
	requirement: UnitRequirement
}

export interface CreditPointPrerequisite {
	points: number
	/**
	 * if this is true, the CPs must be from FIT units
	 * @default false
	 */
	fitOnly?: boolean
	/** if this is present the CPs must be of this level */
	levelOnly?: number
}

export interface Unit extends HandbookThing {
	offerings: TeachingPeriod[]
	requisites: Requisite[]
	/** raw HTML data */
	enrolmentRules: string[]
	creditPointPrerequisite?: CreditPointPrerequisite
	description: string
}

export interface Specialisation extends HandbookThing {
	requirement: UnitRequirement
}
