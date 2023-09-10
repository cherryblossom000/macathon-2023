import type { Unit } from "shared"

const units: Unit[] = [
	{
		code: 'FIT1006',
		title: 'Business information analysis',
		offerings: ['First semester'],
		enrolmentRules: [
			'<p>Prerequisite: A study score of 25 in VCE Mathematics Methods or Specialist Maths units 3 &amp; 4 or 30 in Further Maths units 3 &amp; 4 or MTH1010 or equivalent</p>',
			'<p>Prohibition: BUS1100, ETC1000, ETF1100, ETP1100, ETS1102, ETW1000, ETW1102, ETX1100, MAT1097, STA1010, SCI1020</p>',
		],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						'BUS1100',
						'ETC1000',
						'ETF1100',
						'ETP1100',
						'ETS1102',
						'ETW1000',
						'ETW1102',
						'ETX1100',
						'MAT1097',
						'STA1010',
						'SCI1020',
					],
				},
			},
		],
	},
	{
		code: 'FIT1008',
		title: 'Introduction to computer science',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [
			'<p>Prerequisites: Students beginning FIT1008 are assumed to be able to: Identify the main components of an algorithm (variables, operators, expressions, etc), and write the algorithm associated to the specification of a simple problem. Be able to translate a simple algorithm into a program containing variable declarations, selection, repetition, and lists and/or arrays.</p>',
		],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2085', 'FIT1054'],
						},
					],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT1045', 'FIT1053'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT1013',
		title: 'Digital futures: IT for business',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [],
	},
	{
		code: 'FIT1033',
		title: 'Foundations of 3D',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['DIS1911'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT1043',
		title: 'Introduction to data science',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: MTH1010 or VCE Mathematics Methods or Specialist Mathematics units 3 &amp; 4 with a study score of 25 or equivalent.</p>',
		],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT5145'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT1045',
		title: 'Introduction to programming',
		offerings: ['First semester', 'Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT1053'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT1047',
		title: 'Introduction to computer systems, networks and security',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [],
		requisites: [],
	},
	{
		code: 'FIT1048',
		title: 'Fundamentals of C++',
		offerings: ['Second semester'],
		enrolmentRules: ['<p>Prohibition: FIT2071</p>'],
		requisites: [],
	},
	{
		code: 'FIT1049',
		title: 'IT professional practice',
		offerings: ['First semester', 'Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: Completion of 12 credit points of FIT units.</p>',
		],
		requisites: [],
		creditPointPrerequisite: {
			points: 12,
			fitOnly: true,
		},
	},
	{
		code: 'FIT1050',
		title: 'Web fundamentals',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FZA1050'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT1051',
		title: 'Programming fundamentals in java',
		offerings: ['First semester', 'Second semester'],
		enrolmentRules: [],
		requisites: [],
	},
	{
		code: 'FIT1052',
		title: 'Digital futures: IT shaping society',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [],
	},
	{
		code: 'FIT1056',
		title: 'Collaborative engineering for web applications ',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['ENG1003'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT1073',
		title: 'Game design',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2073'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2001',
		title: 'Systems development',
		offerings: ['First semester', 'Second semester'],
		enrolmentRules: ['<p>Prerequisite: 24 points of FIT units</p>'],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FZA2001'],
						},
					],
				},
			},
		],
		creditPointPrerequisite: {
			points: 24,
			fitOnly: true,
		},
	},
	{
		code: 'FIT2002',
		title: 'IT project management',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: As well as completion of at least 36 credit points of study.</p>',
		],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: [
								'FIT1045',
								'ENG1003',
								'FIT1048',
								'ENG1013',
								'FIT1051',
								'FIT1053',
							],
						},
					],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FZA2002'],
						},
					],
				},
			},
		],
		creditPointPrerequisite: {
			points: 36,
			fitOnly: false,
		},
	},
	{
		code: 'FIT2004',
		title: 'Algorithms and data structures',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: ['FIT1054', 'FIT2085', 'FIT1008'],
								},
								{
									operator: 'OR',
									items: [
										'MAT1841',
										'MTH1030',
										'ENG1005',
										'MTH1035',
										'MAT1830',
									],
								},
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2014',
		title: 'Theory of computation',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: [
										'FIT1051',
										'FIT1045',
										'FIT1053',
										'ENG1013',
										'FIT1048',
										'ENG1003',
									],
								},
								{
									operator: 'OR',
									items: ['MAT1830', 'MTH1030', 'MTH1035', 'ENG1005'],
								},
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2073',
		title: 'Game design studio 1',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [],
	},
	{
		code: 'FIT2081',
		title: 'Mobile application development',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FZA2081'],
						},
					],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT1045', 'FIT1048', 'FIT1051', 'FIT1053'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2082',
		title: 'Computer science research project',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2083'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2083',
		title: 'Innovation and research in computer science',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['MAT1841', 'MTH1030', 'MTH1035'],
						},
					],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT4005'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2085',
		title: 'Introduction to computer science for engineers',
		offerings: ['First semester', 'Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT1054', 'FIT1008'],
						},
					],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: ['ENG1003', 'ENG1013'],
								},
								{
									operator: 'OR',
									items: ['ENG1060', 'ENG1014'],
								},
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2086',
		title: 'Modelling for data analysis',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: ['FIT1053', 'FIT1045'],
								},
								{
									operator: 'OR',
									items: ['MTH1035', 'ENG1005', 'MAT1841', 'MTH1030'],
								},
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2087',
		title: '3D character animation',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['DIS1911', 'FIT1033'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2090',
		title: 'Business information systems and processes',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: Completion of 24 points of FIT or BusEco units at level 1.</p>',
		],
		requisites: [],
		creditPointPrerequisite: {
			points: 24,
			fitOnly: true,
			levelOnly: 1,
		},
	},
	{
		code: 'FIT2091',
		title: 'Interactive media studio 1',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT1046'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2092',
		title: 'Interactive media studio 2',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2091'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2093',
		title: 'Introduction to cyber security',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'AND',
									items: ['FIT1047'],
								},
								{
									operator: 'OR',
									items: ['FIT1051', 'FIT1053', 'FIT1045', 'FIT1048'],
								},
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2094',
		title: 'Databases',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT3171'],
						},
					],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT1051', 'FIT1045', 'FIT1053', 'FIT1048'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2095',
		title: 'e-Business software technologies',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: ['FIT1045', 'FIT1048', 'FIT1051', 'FIT1053'],
								},
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2096',
		title: 'Games programming 1',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT1048'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2097',
		title: 'Games programming 2',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2096'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2098',
		title: 'Virtual and augmented reality',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT1033', 'DIS1911'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2099',
		title: 'Object oriented design and implementation',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: [
								{
									operator: 'AND',
									items: [
										{
											operator: 'OR',
											items: ['ENG1003', 'ENG1013'],
										},
										{
											operator: 'OR',
											items: ['ENG1060', 'ENG1014'],
										},
									],
								},
								{
									operator: 'OR',
									items: [
										'FIT1051',
										'FIT1045',
										'FIT1053',
										'FIT1054',
										'FIT1048',
										'FIT1008',
									],
								},
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2100',
		title: 'Operating systems',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['ENG1003', 'FIT1047', 'ENG1013'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2101',
		title: 'Software engineering process and management',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: [
								{
									operator: 'AND',
									items: [
										{
											operator: 'OR',
											items: ['ENG1013', 'ENG1003'],
										},
										{
											operator: 'OR',
											items: ['ENG1060', 'ENG1014'],
										},
									],
								},
								'FIT1048',
								'FIT1051',
								'FIT1045',
								'FIT1053',
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2102',
		title: 'Programming paradigms',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT1008', 'FIT1054'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2104',
		title: 'Web database interface',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT2094', 'FIT3171'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT2107',
		title: 'Software quality and testing',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: [
								{
									operator: 'AND',
									items: [
										{
											operator: 'OR',
											items: ['ENG1060', 'ENG1014'],
										},
										{
											operator: 'OR',
											items: ['ENG1013', 'ENG1003'],
										},
									],
								},
								'FIT1048',
								'FIT1051',
								'FIT1045',
								'FIT1053',
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3003',
		title: 'Business intelligence and data warehousing',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT2094', 'FIT3171'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3031',
		title: 'Network security',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FZA3031'],
						},
					],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT1047', 'FIT2093'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3039',
		title: 'Studio project 1',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [
			'<p>Prerequisite: (FIT2091 and (FIT2087 or FIT2098)) or (FIT2073 and FIT2096)</p>',
		],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'OR',
					items: [
						{
							operator: 'AND',
							items: [
								'FIT2091',
								{operator: 'OR', items: ['FIT2087', 'FIT2098']},
							],
						},
						{
							operator: 'AND',
							items: ['FIT2073', 'FIT2096'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3040',
		title: 'Studio project 2',
		offerings: ['First semester', 'Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT3039'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3077',
		title: 'Software engineering: Architecture and design',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FZA3077'],
						},
					],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: [
								{
									operator: 'AND',
									items: [
										{
											operator: 'OR',
											items: ['FIT2004', 'FIT2081'],
										},
										'FIT2001',
									],
								},
								'FIT2099',
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3080',
		title: 'Artificial intelligence',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: ['ENG1005', 'MAT1841', 'MTH1030', 'MTH1035'],
								},
								'MAT1830',
								'FIT2004',
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3094',
		title: 'Artificial life, artificial intelligence and virtual environments',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2096'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3138',
		title: 'Real time enterprise systems',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: Completion of 12 points of level two units from Information Technology, Science or Engineering or equivalent.</p>',
		],
		requisites: [],
		creditPointPrerequisite: {
			points: 12,
			fitOnly: true,
			levelOnly: 2,
		},
	},
	{
		code: 'FIT3139',
		title: 'Computational modelling and simulation',
		offerings: ['First semester'],
		enrolmentRules: [
			'<p>Prerequisites: One of MAT1841, ENG1091, ENG1005, MTH1030, MTH1035 or equivalent, plus any introductory programming unit (e.g. FIT1045, FIT1048, FIT1051, FIT1053,  ECE2071, or equivalent)</p>',
		],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['MAT1841', 'ENG1091', 'ENG1005', 'MTH1030', 'MTH1035'],
						},
						{
							operator: 'OR',
							items: ['FIT1045', 'FIT1048', 'FIT1051', 'FIT1053', 'ECE2071'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3143',
		title: 'Parallel computing',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2004'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3144',
		title: 'Advanced computer science research project',
		offerings: ['Full year'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2083', 'FIT2004'],
						},
					],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT3036'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3145',
		title: 'Game design studio 2',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2096', 'FIT2073'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3146',
		title: 'Maker lab',
		offerings: ['Second semester'],
		enrolmentRules: ['<p>Prerequisite: Plus 90 points of any units</p>'],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: [
								'ENG1003',
								'ENG1013',
								'FIT1048',
								'FIT1053',
								'FIT1051',
								'FIT1045',
							],
						},
					],
				},
			},
		],
		creditPointPrerequisite: {
			points: 90,
		},
	},
	{
		code: 'FIT3152',
		title: 'Data analytics',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['ETX2250'],
						},
					],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: [
								'ETC1000',
								'ETW1000',
								'ETF1100',
								'ETW1010',
								'FIT1006',
								'FIT2086',
								'ETW2111',
								'ETC1010',
								'STA1010',
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3154',
		title: 'Advanced data analysis',
		offerings: ['Second semester'],
		enrolmentRules: ['<p>Prerequisite: Or related statistical background</p>'],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2086'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3155',
		title: 'Advanced data structures and algorithms',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2004'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3158',
		title: 'Business decision modelling',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: And completion of 24 points at Level 1 from FIT or BusEco</p>',
		],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['ETS1102', 'FIT1006', 'STA1010', 'ETF1100', 'ETC1000'],
						},
					],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['ETF2480', 'FZA3158'],
						},
					],
				},
			},
		],
		creditPointPrerequisite: {
			points: 24,
			fitOnly: true,
			levelOnly: 1,
		},
	},
	{
		code: 'FIT3159',
		title: 'Computer architecture',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT2085', 'FIT1047', 'FIT1008'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3161',
		title: 'Computer science project 1',
		offerings: ['First semester', 'Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2004'],
						},
					],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT3144', 'FIT3163'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3162',
		title: 'Computer science project 2',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT3161'],
						},
					],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT3144'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3163',
		title: 'Data science project 1',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT3161', 'FIT3144'],
						},
					],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: ['FIT1055', 'FIT1049'],
								},
								'FIT1043',
								'FIT2004',
								'FIT2094',
							],
						},
					],
				},
			},
			{
				type: 'corequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2086'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3164',
		title: 'Data science project 2',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT3163'],
						},
					],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT3144'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3165',
		title: 'Computer networks',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT1053', 'FIT1048', 'FIT1051', 'FIT1045', 'FIT1008'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3168',
		title: 'IT forensics',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2093'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3169',
		title: 'Immersive environments',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT1033', 'DIS1911'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3170',
		title: 'Software engineering practice',
		offerings: ['Full year', 'Second semester to Summer semester A'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2101', 'FIT2107'],
						},
					],
				},
			},
			{
				type: 'corequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT3077', 'FIT2004'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3171',
		title: 'Databases',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2094'],
						},
					],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: [
										'FIT1053',
										'FIT1045',
										'ENG1003',
										'FIT1048',
										'ENG1013',
										'FIT1051',
									],
								},
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3172',
		title: 'Sonics',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: 24 credit points of second year units</p>',
		],
		requisites: [],
		creditPointPrerequisite: {
			points: 24,
			levelOnly: 2,
		},
	},
	{
		code: 'FIT3173',
		title: 'Software security',
		offerings: ['Summer semester B', 'First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FZA3173'],
						},
					],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: ['FIT1045', 'FIT1048', 'FIT1051', 'FIT1053'],
								},
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3174',
		title: 'IT strategy and governance',
		offerings: ['First semester'],
		enrolmentRules: [
			'<p>Prerequisite: Completion of 24 points of second year level of IT or its equivalent study</p>',
		],
		requisites: [],
		creditPointPrerequisite: {
			points: 24,
			fitOnly: true,
			levelOnly: 2,
		},
	},
	{
		code: 'FIT3175',
		title: 'Usability',
		offerings: ['Summer semester B', 'First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: [
										'FIT1045',
										'FIT1053',
										'FIT2085',
										'FIT1048',
										'FIT1051',
									],
								},
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3176',
		title: 'Advanced database design',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT2094', 'FIT3171'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3178',
		title: 'iOS app development',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'OR',
							items: ['FIT1048', 'FIT1051', 'FIT1045', 'FIT1053', 'FIT2085'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3179',
		title: 'Data visualisation',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: Completion of 24 points at first year.</p>',
		],
		requisites: [],
		creditPointPrerequisite: {
			points: 24,
			levelOnly: 1,
		},
	},
	{
		code: 'FIT3180',
		title: 'Data management for health informatics',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT1052'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3181',
		title: 'Deep learning',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['FIT2086'],
						},
					],
				},
			},
		],
	},
	{
		code: 'FIT3182',
		title: 'Big data management and processing',
		offerings: ['First semester'],
		enrolmentRules: [
			'<p>Students should have an understanding of database concepts and SQL and Python programming background.</p>',
		],
		requisites: [
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: [
								{
									operator: 'OR',
									items: ['FIT2094', 'FIT3171'],
								},
								'FIT2004',
							],
						},
					],
				},
			},
		],
	},
	{
		code: 'MAT1830',
		title: 'Discrete mathematics for computer science',
		offerings: ['First semester'],
		enrolmentRules: [
			'<p>Prerequisite: VCE Specialist Mathematics or Mathematical Methods units 3 and 4 with a raw study score of at least 25 or Further maths with a raw study score of at least 35.</p>',
			'<p>Prohibition: MAT1077, MTH1112</p>',
		],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['ITI9004', 'MAT1077', 'MTH1112'],
						},
					],
				},
			},
		],
	},
	{
		code: 'MAT1841',
		title: 'Continuous mathematics for computer science',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: VCE Specialist Mathematics or Mathematical Methods units 3 and 4 with a study score of at least 25 or Further maths with a study score of at least 35.<br />Prohibitions: ENG1090, MTH1020, MAT2003</p>',
		],
		requisites: [
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [
						{
							operator: 'AND',
							items: ['ITI9004', 'ENG1090', 'MTH1020', 'MAT2003'],
						},
					],
				},
			},
		],
	},
]

export default units
