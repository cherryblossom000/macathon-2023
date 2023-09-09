import type {Course} from 'shared'

export const C2001: Course = {
	code: 'C2001',
	title: 'Bachelor of Computer Science',
	abbreviatedName: 'BCompSci',
	requirement: {
		requirement: {
			operator: 'AND',
			items: [
				{
					title: 'Part E. Applied practice',
					requirement: {
						operator: 'OR',
						items: [
							{
								title: 'Malaysia option',
								requirement: {
									operator: 'OR',
									items: [
										{
											title: 'Data science project',
											requirement: {
												operator: 'AND',
												items: ['FIT3163', 'FIT3164'],
											},
										},
										{
											title: 'Industry based learning',
											requirement: {
												operator: 'OR',
												items: ['FIT3045', 'FIT3199'],
											},
										},
										{
											title: 'Computer science project',
											requirement: {
												operator: 'AND',
												items: ['FIT3161', 'FIT3162'],
											},
										},
									],
								},
							},
							{
								title: 'Clayton option',
								requirement: {
									operator: 'OR',
									items: [
										{
											title: 'Data science project',
											requirement: {
												operator: 'AND',
												items: ['FIT3164', 'FIT3163'],
											},
										},
										{
											title: 'Industry based learning',
											requirement: {
												operator: 'AND',
												items: ['FIT3045'],
											},
										},
										{
											title: 'Computer science project',
											requirement: {
												operator: 'AND',
												items: ['FIT3161', 'FIT3162'],
											},
										},
									],
								},
							},
						],
					},
				},
				{
					title:
						'Part C. Specialist discipline knowledge and Part D. Problem solving and analytical skills',
					requirement: {
						operator: 'OR',
						items: [
							{
								title: 'Data science',
								requirement: {
									operator: 'AND',
									items: [
										{
											title: 'Core units',
											requirement: {
												operator: 'AND',
												items: ['FIT1043', 'FIT2086', 'FIT2094', 'FIT3179'],
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
													'MTH3170',
													'MTH3175',
												],
											},
										},
									],
								},
							},
						],
					},
				},
				{
					title: 'Part A. Foundational computer science study',
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
					title: 'Part B. Professional skills study ',
					requirement: {
						operator: 'OR',
						items: ['FIT1049', 'FIT1055'],
					},
				},
			],
		},
	},
}
