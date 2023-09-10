import type {Course} from 'shared'

export const C2001: Course = {
	code: 'C2001',
	title: 'Bachelor of Computer Science',
	abbreviatedName: 'BCompSci',
	requirement: {
		title: 'Bachelor of Computer Science',
		requirement: {
			operator: 'AND',
			items: [
				{
					title: 'Part A: Foundational computer science study',
					requirement: {
						operator: 'AND',
						items: [
							{
								title: 'Core units',
								requirement: {
									operator: 'AND',
									items: [
										'MAT1830',
										'FIT1047',
										'FIT1045',
										'MAT1841',
										'FIT1008',
										'FIT2014',
										'FIT2004',
									],
								},
							},
						],
					},
				},
				{
					title: 'Part B: Professional skills study',
					requirement: {
						operator: 'AND',
						items: ['FIT1049'],
					},
				},
				{
					title: 'Part C: Specialist discipline knowledge',
					requirement: {
						operator: 'OR',
						items: [
							{
								title: 'DATASCI01: Data science',
								requirement: {
									operator: 'AND',
									items: [
										{
											title: 'Core units',
											requirement: {
												operator: 'AND',
												items: [
													'FIT1043',
													'FIT2086',
													'FIT2094',
													'FIT3179',
													'FIT3163',
													'FIT3164',
												],
											},
										},
										{
											title: 'Level 3 electives',
											requirement: {
												operator: 2,
												items: [
													'FIT3003',
													'FIT3139',
													'FIT3152',
													'FIT3154',
													'FIT3181',
													'FIT3182',
													'FIT3183',
												],
											},
										},
									],
								},
							},
							{
								title: 'COMPSCI03: Advanced computer science',
								requirement: {
									operator: 'AND',
									items: [
										{
											title: 'Core units',
											requirement: {
												operator: 'AND',
												items: [
													'FIT2099',
													'FIT2102',
													'FIT3143',
													'FIT3155',
													'FIT3171',
													'FIT3161',
													'FIT3162',
												],
											},
										},
										{
											title: 'Level 3 elective unit',
											requirement: {
												operator: 'OR',
												items: [
													'FIT3031',
													'FIT3077',
													'FIT3080',
													'FIT3081',
													'FIT3088',
													'FIT3094',
													'FIT3139',
													'FIT3142',
													'FIT3146',
													'FIT3152',
													'FIT3159',
													'FIT3165',
													'FIT3173',
													'FIT3175',
													'FIT3181',
													'FIT3182',
													'FIT3183',
												],
											},
										},
									],
								},
							},
						],
					},
				},
			],
		},
	},
}
