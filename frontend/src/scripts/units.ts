import type {Unit} from 'shared'

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
		description:
			'<p>This unit is designed to give students an introduction to statistical and quantitative methods within a business-related framework and to provide students with a sound foundation for more advanced statistical and quantitative studies. The unit will provide opportunities for the student to gain skills in the presentation of business and economic data, the use of frequency distributions, measures of central tendency and dispersion, principles of probability, use of probability distributions, sampling theory, estimation, hypothesis testing, regression analysis, the use of indices and forecasting methods.</p>',
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
					items: [{operator: 'AND', items: ['FIT2085', 'FIT1054']}],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [{operator: 'OR', items: ['FIT1045', 'FIT1053']}],
				},
			},
		],
		description:
			'<p>This unit introduces students to core problem-solving, analytical skills, and methodologies useful for developing flexible, robust, and maintainable software. In doing this, it covers a range of conceptual levels, from fundamental algorithms and data structures, down to their efficient implementation as well as complexity. Topics include data types, data structures, algorithms, algorithmic complexity, recursion, and their practical applications.</p>',
	},
	{
		code: 'FIT1013',
		title: 'Digital futures: IT for business',
		offerings: ['Second semester'],
		enrolmentRules: [],
		requisites: [],
		description:
			'<p>Introduction to business application tools and introduction to basic computing concepts. Principles of spreadsheets and relational databases, covering their use for the generation of business plans, reports, financial statements, etc. Both the spreadsheet and database components incorporate an introduction to programming with visual basic for applications (VBA). The database component covers principles of database design. The business application software packages used in the unit are Microsoft Excel and Microsoft Access.</p>',
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
					items: [{operator: 'AND', items: ['DIS1911']}],
				},
			},
		],
		description:
			'<p>This unit is an introduction to the techniques, frameworks and processes comprising 3D modelling and 3D imaging. Foundations of 3D aims to give students an understanding of 3D modelling by developing skills in 3D model creation for a variety of contexts, including 3D prototyping, 3D visualisation and 3D modelling for games and animation. Students will communicate their knowledge of 3D theory through the production of designs that demonstrate geometrical modelling, texture mapping, virtual lighting techniques, camera positioning, and rendering procedures.</p>',
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
					items: [{operator: 'AND', items: ['FIT5145']}],
				},
			},
		],
		description:
			'<p>This unit looks at processes and case studies to understand the many facets of working with data, and the significant effort in Data Science over and above the core task of Data Analysis. Working with data as part of a business model and the lifecycle in an organisation is considered, as well as business processes and case studies. Data and its handling is also introduced: characteristic kinds of data and its collection, data storage and basic kinds of data preparation, data cleaning and data stream processing. Curation and management are reviewed: archival and architectural practice, policy, legal and ethical issues. Styles of data analysis and outcomes of successful data exploration and analysis are reviewed. Standards, tools and resources are also reviewed.</p>',
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
					items: [{operator: 'AND', items: ['FIT1053']}],
				},
			},
		],
		description:
			'<p>This unit introduces programming fundamentals using the Python language. It will present fundamental programming control structures, built-in and complex datatypes, mechanisms for modularity, and the use of basic libraries. Students will also be introduced to good programming practices and programming in teams.</p>',
	},
	{
		code: 'FIT1047',
		title: 'Introduction to computer systems, networks and security',
		offerings: ['Second semester', 'First semester'],
		enrolmentRules: [],
		requisites: [],
		description:
			'<p>The unit introduces students to fundamentals of computer systems, networks and security. It provides basic knowledge of computer organisation and architecture, operating systems, networking architecture, technology and operation. It introduces the concepts of security goals for protecting common modern computer systems and communication networks from adversaries and the deployment of suitable countermeasures to achieve these goals.</p>',
	},
	{
		code: 'FIT1048',
		title: 'Fundamentals of C++',
		offerings: ['Second semester'],
		enrolmentRules: ['<p>Prohibition: FIT2071</p>'],
		requisites: [],
		description:
			'<p>This unit introduces programming fundamentals and the C++ language to students. The unit provides a foundational understanding of program design and implementation of algorithms to solve simple problems. Fundamental programming control structures, built in and complex data-types and mechanisms for modularity will be presented in C++. This unit also places a focus on object-oriented design principles, using object-oriented design as a process for program design and problem solving. More advanced object-oriented programming topics such as inheritance and polymorphism will also be covered. Other C++ fundamentals such as pointers and the STL will be presented, as will implementations of algorithms and data structures used in problem solving.</p>',
	},
	{
		code: 'FIT1049',
		title: 'IT professional practice',
		offerings: ['First semester', 'Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: Completion of 12 credit points of FIT units.</p>',
		],
		requisites: [],
		creditPointPrerequisite: {points: 12, fitOnly: true},
		description:
			'<p>This unit provides a practical and theoretical introduction to what it means to be an IT professional, or a professional with IT expertise today. Students will encounter a range of issues relevant to professional practice in the workplace, as well as an understanding of the wider responsibilities that professionals are called upon to uphold in society as they apply their IT expertise. Topics addressed include: the nature of IT as professional expertise; professional communications; situational management; teamwork in professional and organisational settings; problem solving and decision making; applications of professional ethics and relevant legal frameworks. Skills and knowledge will be developed and applied through a range of collaborative, individual and reflective tasks in relevant communication modes and formats.</p>',
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
					items: [{operator: 'AND', items: ['FZA1050']}],
				},
			},
		],
		description:
			'<p>The world-wide web is one of the most widely-used platforms for building applications. Although all students can be assumed to be experienced users of the web, very few have any clear understanding of the technologies upon which the web is based, and the way in which these technologies affect web-based applications. This unit aims to give students a sound basic knowledge of the web and a range of issues which may be involved in web application development. It will take a strongly practical focus in examining the technology, design and implementation problems a developer needs to address in developing applications for real-world systems. The diversity of web applications means that there are a wide range of issues which may be relevant to the development of any given web site. The unit will aim to give breadth of coverage of these issues, rather than focusing in depth on any particular development task or any specific type of web application.</p>\n<p>The unit will take a strongly practical focus in examining the technology issues involved, and highlight the key issues which a developer needs to address in developing applications of this kind for real-world systems.</p>',
	},
	{
		code: 'FIT1051',
		title: 'Programming fundamentals in java',
		offerings: ['First semester', 'Second semester'],
		enrolmentRules: [],
		requisites: [],
		description:
			"<p>This unit will provide students with an overview of the fundamental knowledge and skills required to code applications. The topics covered will include: the context of programming in an industrial SDLC, dealing with code 'plumbing', data, using API library classes, common business logic patterns and their implementation using control structures, methods and modularity, value and reference types, coding custom driver and concept classes, class inheritance, interfaces, multi-class applications.</p>",
	},
	{
		code: 'FIT1052',
		title: 'Digital futures: IT shaping society',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [],
		description:
			'<p>From online entertainment to paying our bills with smartphones, computers are at the centre of our lives today. How did this change come about, and what has it meant for us as individuals, as well as for society more broadly? Starting with its origins in the world of government, the military and corporations, this unit explores the lasting impression that IT continues to make within the spheres of popular culture, work, politics, the law, and leisure.</p>',
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
					items: [{operator: 'AND', items: ['ENG1003']}],
				},
			},
		],
		description:
			"<p>Embark on an exciting journey into software engineering with this unit, tailored explicitly for first-year undergraduate students from diverse engineering backgrounds. We aim to provide you with a solid understanding of essential software engineering concepts, methodologies, and practices while introducing you to programming. Throughout this unit, you will explore the crucial role that software engineering plays in solving real-world problems and delve into the ethical considerations involved in the development process. You will be introduced to various software development methodologies such as Waterfall, Agile, and Scrum and examine the intricacies of the software development life cycle (SDLC). You will learn an industry-standard software programming language and how to work effectively in a diverse software development team. You'll learn how to apply human-centric software engineering best practices to develop systems that work for humans.<br />No prior programming or software engineering experience is required for this course. It is designed to serve as an ideal starting point for students interested in exploring the field of software engineering and considering a future in software engineering or related disciplines.</p>",
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
					items: [{operator: 'AND', items: ['FIT2073']}],
				},
			},
		],
		description:
			'<p>This unit provides a foundation in the theoretical and practical principles of game design and game narrative structures in the games development process. Utilising the principles taught in this unit, students will be given the opportunity to design innovative game applications and implement the consequences of their decisions as working paper based game prototypes.</p>\n<p>The combination of theory and practice in this unit is geared to equip students with the skills to not only design innovative games, but also to critique existing games and importantly new game ideas. The studio environment will facilitate considerable peer interaction, in particular in the design, communication, and critique of new game ideas. The unit provides knowledge and skills, which students can apply within game development projects across subsequent units within the Games and Immersive Media major.</p>',
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
					items: [{operator: 'AND', items: ['FZA2001']}],
				},
			},
		],
		creditPointPrerequisite: {points: 24, fitOnly: true},
		description:
			'<p>The unit introduces students to systems analysis and design as a problem solving activity, within the framework of a selected methodology. It will focus on contemporary industry practice; investigating understanding and documenting system requirements; a range of design and implementation activities; and professional skills required for systems development.</p>',
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
					items: [{operator: 'AND', items: ['FZA2002']}],
				},
			},
		],
		creditPointPrerequisite: {points: 36, fitOnly: false},
		description:
			'<p>This unit introduces students to the many concepts, tools and techniques for managing information technology projects. Exploring traditional and agile approaches for managing projects, topics include project lifecycles, project planning, project scheduling, team building, risk management, time and quality management. A case study approach will be used to provide learning opportunities, with an emphasis on the unique aspects of information technology projects.</p>',
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
								{operator: 'OR', items: ['FIT1054', 'FIT2085', 'FIT1008']},
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
		description:
			'<p>This unit introduces students to problem solving concepts and techniques fundamental to the science of programming. In doing this it covers problem specification, algorithmic design, analysis and implementation. Detailed topics include analysis of best, average and worst-case time and space complexity; introduction to numerical algorithms; recursion; advanced data structures such as heaps and B-trees; hashing; sorting algorithms; searching algorithms; graph algorithms; and numerical computing.</p>',
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
		description:
			'<p>This unit introduces formal languages, models of computation, and computational complexity. It looks at what computers can and cannot compute. Topics include finite state automata, regular expressions, grammars, pushdown automata, computable functions, Turing machines, polynomial-time reductions, complexity classes P and NP, and NP-completeness. Skills at writing formal proofs will be developed.</p>',
	},
	{
		code: 'FIT2073',
		title: 'Game design studio 1',
		offerings: ['First semester'],
		enrolmentRules: [],
		requisites: [],
		description:
			'<p>This unit provides a foundation in the theoretical and practical principles of game design and game narrative structures in the games development process. Utilising the principles taught in this unit, students will be given the opportunity to design innovative game applications and implement the consequences of their decisions as working game prototypes.</p>\n<p>The combination of theory and practice in this unit is geared to equip students with the skills to not only design innovative games, but also to critique existing games and importantly new game ideas. The studio environment will facilitate considerable peer interaction, in particular in the design, communication, and critique of new game ideas. The unit provides knowledge and skills, which students can apply within their game development projects in the third year studio project/s (FIT3039/3040) and across all subsequent units.</p>',
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
					items: [{operator: 'AND', items: ['FZA2081']}],
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
		description:
			'<p>This unit introduces an industrial strength programming language (with supporting software technologies and standards) and object-oriented application development in the context of mobile application development for smartphones and tablets. The approach is strictly application driven. Students will learn the syntax and semantics of the chosen language and its supporting technologies and standards and object oriented design and coding techniques by analysing a sequence of carefully graded, finished applications. Students will also design and build their own applications.</p>',
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
					items: [{operator: 'AND', items: ['FIT2083']}],
				},
			},
		],
		description:
			"<p>This unit builds upon FIT1041 and FIT2083 or FIT2084 and allows students to conduct an independent research project. Students will be assigned to one of the Faculty of Information Technology's research groups, an academic supervisor and a research topic. Students may work on their project individually or in groups, as determined by their supervisor. During the semester, the student will be required to participate in research group events including seminars and presentations.</p>",
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
					items: [{operator: 'OR', items: ['MAT1841', 'MTH1030', 'MTH1035']}],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [{operator: 'AND', items: ['FIT4005']}],
				},
			},
		],
		description:
			"<p>This unit equips students to be effective innovators and researchers in Computer Science. It introduces students to the issues, concepts, methods and techniques associated with IT research in general, but focuses on those most commonly used for research in Computer Science. It introduces students to professional practice and research ethics, the principles of research design, research methods and techniques of data collection and analysis appropriate to Computer Science. It covers oral and written communication skills.</p>\n<p>Skills developed and knowledge acquired from this unit will prepare students to conduct and to communicate their own research, as well as to be knowledgeable consumers of others' research.</p>",
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
					items: [{operator: 'AND', items: ['FIT1054', 'FIT1008']}],
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
								{operator: 'OR', items: ['ENG1003', 'ENG1013']},
								{operator: 'OR', items: ['ENG1060', 'ENG1014']},
							],
						},
					],
				},
			},
		],
		description:
			'<p>This unit introduces students to core problem-solving, analytical skills, and methodologies useful for developing flexible, robust, and maintainable software. In doing this, it covers a range of conceptual levels, from fundamental algorithms and data structures, down to their efficient implementation as well as complexity. Topics include data types, data structures, algorithms, algorithmic complexity, recursion, and their practical applications.</p>',
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
								{operator: 'OR', items: ['FIT1053', 'FIT1045']},
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
		description:
			'<p>This unit explores the statistical modelling foundations that underlie the analytic aspects of Data Science. It covers:</p>\n<ul>\n<li>Data: collection and sampling, data quality.</li>\n<li>Analytic tasks: statistical hypothesis testing, exploratory and confirmatory analysis.</li>\n<li>Probability distributions: dependence and independence, multivariate Gaussian, Poisson, Dirichlet, random number generation and simulation of distributions, simulation of samples (bootstrap).</li>\n<li>Predictive models: linear and logistic regression, and Bayesian classification.</li>\n<li>Estimation: parameter and function estimation, maximum likelihood and minimum cost estimators, Monte Carlo estimators, inverse probabilities and Bayes theorem, bias versus variance and sample size effects, cross validation, estimation of model performance.</li>\n</ul>',
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
					items: [{operator: 'OR', items: ['DIS1911', 'FIT1033']}],
				},
			},
		],
		description:
			'<p>This unit builds upon the skills, techniques and theory introduced in FIT1033 Foundations of 3D and extends their research and skills in 3D character design and motion capture technologies for games and 3D animation. Students will be introduced to advanced techniques for character detailing (modelling and texturing) character animation (motion capture systems) and 3D environmental design. The theoretical and practical considerations contributing to the conceptualisation and preparation of 3D characters for animation sequences will constitute a key focus of this unit.</p>',
	},
	{
		code: 'FIT2090',
		title: 'Business information systems and processes',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: Completion of 24 points of FIT or BusEco units at level 1.</p>',
		],
		requisites: [],
		creditPointPrerequisite: {points: 24, fitOnly: true, levelOnly: 1},
		description:
			'<p>Globalisation and increasing customer demands are challenges facing companies today. To remain competitive and effective in their offerings, companies cannot afford to harbour inefficiencies in their operations. A business process oriented approach is key to the success of modern organisations. A well-designed process will improve efficiency and deliver greater productivity. At the same time, business processes must be designed to ensure that they are effective and meet customer requirements. The internal processes of a business organisation are described with an emphasis on how they work together to achieve the goals of the organisation. A range of process modelling tools is presented in the unit.</p>\n<p>Upon completion of this unit students should be able to: describe business processes in organisations, their structure and they fit into the overall organisation objectives; recommend a process modelling tool for modelling and analysing business processes with the aim of increasing efficiencies and effectiveness for businesses; analyse factors for managing in-house development or software outsourcing; discuss ethical issues related to the management and use of business information systems.</p>',
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
					items: [{operator: 'AND', items: ['FIT1046']}],
				},
			},
		],
		description:
			'<p>Interactive Media Studio 1 builds upon the skills learnt in Interactive Media Foundations and introduces students to production processes for video content used on the World Wide Web. The basics of web design and graphics production introduced in Interactive Media Foundations are extended in this unit. Students will undertake projects that integrate a range of media resources to design and develop original digital graphics, video and web content. Students will have opportunities to work in team to plan and execute large scale projects.</p>',
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
					items: [{operator: 'AND', items: ['FIT2091']}],
				},
			},
		],
		description:
			'<p>Interactive media studio 2 consolidates the digital media skills introduced in Interactive media foundations and extended in Interactive media studio 1. The focus on the development of high level digital media skills in graphic editing, digital image manipulation and JavaScript equips students undertaking this unit to enter higher-level units in the major, minor and extended major.</p>',
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
								{operator: 'AND', items: ['FIT1047']},
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
		description:
			'<p>This unit will provide students with knowledge of cyber security issues, and their relevance to the management of information systems in contemporary organisations. Students will learn about common cyber attacks and the techniques for identifying, detecting, and defending against cyber-security threats. Further students will have an understanding of the ethical and privacy issues relating to the security of information systems. Additionally students will be required to analyse and assess recent developments and future trends in cyber security technologies.</p>',
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
					items: [{operator: 'AND', items: ['FIT3171']}],
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
		description:
			'<p>This unit will provide an introduction to the concepts of database design and usage and the related issues of data management. Students will develop skills in planning, designing, and implementing a data model using an enterprise-scale relational database system (Oracle). Methods and techniques will also be presented to populate, retrieve, update and implement integrity features on data in the implemented database system.</p>',
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
		description:
			'<p>Non-B2B e-Business applications are now mostly developed for Web and mobile platforms. With the advent of mobile Web apps a set of technologies and techniques has emerged that are shared by both Web and mobile application development. This unit introduces, explains and uses these technologies and techniques to build basic but industrial strength e-Business applications. The topics covered will be selected from the following: an overview of the current state-of-play in e-Business application development, HTML5 (the living standard), CSS3, object oriented JavaScript for large developments, JavaScript APIs, Ajax, JSON, XML and related W3C technologies, jQuery, jQuery Mobile, MVC, ASP.NET MVC, ECMAScript 2015 and beyond, Angular, TypeScript, React. The appropriateness of the selected technologies in different contexts, together with relevant best practice techniques for their use and integration will also be covered.</p>',
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
					items: [{operator: 'AND', items: ['FIT1048']}],
				},
			},
		],
		description:
			'<p>This unit will further develop object-oriented programming skills with the C++ language, and place them into the Games Programming context. Fundamental games programming design principles will be covered, including formal game structures and the game program loop. A number of specific games programming techniques with C++ will be also covered. These include the use of DirectX, games physics, and advanced 3D rendering, expressing these concepts through game creation using C++ and Microsoft Windows DirectX. Underpinning this will be use of fundamental mathematical principles for working with computer graphics and game interactions. This provides a strong grounding for further study in this area, especially related to games engine development and artificial intelligence.</p>',
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
					items: [{operator: 'AND', items: ['FIT2096']}],
				},
			},
		],
		description:
			'<p>This unit will further develop games development programming skills with the C++ language, and explore them further in the Games Programming context. Focus will be on advanced games programming techniques, including a focus on the content pipeline, advanced rendering and visual game effects. Principles will also be placed into the context of different libraries, such as Vulkan, and other platforms, such as mobile and mixed reality. This provides a strong grounding for further study in this area, especially related to games engine development and artificial intelligence.</p>',
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
					items: [{operator: 'OR', items: ['FIT1033', 'DIS1911']}],
				},
			},
		],
		description:
			'<p>This unit explores the design principles and content creation process for Virtual reality (VR) and augmented reality (AR) applications. You will be given the opportunity to apply the interactive and cognitive functions of VR and AR systems, design and develop assets, and use VR and AR tools and platforms to deploy content.</p>',
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
										{operator: 'OR', items: ['ENG1003', 'ENG1013']},
										{operator: 'OR', items: ['ENG1060', 'ENG1014']},
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
		description:
			'<p>This unit introduces you to object-oriented design principles and their application to the construction of quality software. You will learn the fundamental concepts that underlie modern object-oriented languages, and will learn how to implement your designs using at least one. You will also learn how to use standard notation to illustrate your designs.</p>',
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
					items: [{operator: 'OR', items: ['ENG1003', 'FIT1047', 'ENG1013']}],
				},
			},
		],
		description:
			'<p>This unit will provide students with the knowledge of how a multi-programming, multi-user operating systems operates and it manages and allocate resources to different applications. Students will be able to compare and contrast various resource management allocation strategies. Students will develop and implement code to understand and make use of operating system services.</p>\n<p>The topics covered will include an introduction to C Programming which is heavily used in development of operating systems, operating system structure and services, multi-programming processes, CPU scheduling, memory management, device management, synchronisation, deadlocks, virtual memory and file systems.</p>',
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
										{operator: 'OR', items: ['ENG1013', 'ENG1003']},
										{operator: 'OR', items: ['ENG1060', 'ENG1014']},
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
		description:
			"<p>A disciplined process is vital to the success of any major software development project. In this unit, you will learn essential skills for managing software development efforts and for working within coordinated teams. You will learn how to decide upon and document your team's structure and process model. Your team will be expected to follow the process model they have documented, and to evaluate its effectiveness.</p>\n<p>There are many factors that can potentially cause a software project to fail. This unit will equip you with techniques to identify and manage these risks, including ethical considerations, and will take a risk-focused approach to project organisation.</p>",
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
					items: [{operator: 'OR', items: ['FIT1008', 'FIT1054']}],
				},
			},
		],
		description:
			'<p>Ability to code in differently constructed programming languages is analogous to speaking in different natural languages with varying grammars. Similar to natural languages, programming languages from different paradigms (styles) vary in their expressiveness and efficiency. One programming language may require many screens-full of complex code to accomplish a task for which another requires but a few expressive lines of code. Therefore, understanding the design principles of programming languages enables computational problems to be implemented in dramatically different and powerful ways; leading, in some cases, to solutions that are more elegant, correct, maintainable, efficient and/or extensible.</p>\n<p>This unit examines a selection of programming languages and paradigms and explores the evolution of language design from low-level paradigms that are closer to the execution model of the machine, to more high-level declarative paradigms that allow programmers to model a problem precisely rather than specify its solution. The unit covers paradigms such as functional and declarative programming styles, comparing and contrasting them to programming styles that students are already familiar with, including object-oriented, imperative and procedural programming paradigms. We compare type systems supported by various languages, from scripting languages like JavaScript with weak type systems, to gradual typing as in TypeScript, to advanced compiled languages with strong type correctness, such as Haskell. We see these applied to data-modeling techniques (covering polymorphism, mutability-versus-purity, state management, and side-effects) and different models of execution such as strict-versus-lazy evaluation.</p>\n<p>The unit provides practical experience with using modern functional programming techniques, non-procedural, non-object-oriented programming languages and discusses the influence of programming language theory on the design of current main-stream computer languages, and how the theory translates to practice. A focus of the unit is that these techniques are applicable and ubiquitous in a variety of modern languages, for example, we will see how functional programming techniques are used in relatively conventional imperative languages like JavaScript, and compare and contrast this with pure functional languages, such as Haskell.</p>',
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
					items: [{operator: 'OR', items: ['FIT2094', 'FIT3171']}],
				},
			},
		],
		description:
			'<p>This unit provides students with the knowledge, understanding and skills required to analyse a business problems and develop a solution that uses a web interface to a back-end database. The unit assumes a sound basic knowledge of programming and database concepts and skills as developed in the introductory units in these areas. The emphasis in the unit is on mastery of the key concepts and the basic knowledge and skills required to build this kind of application. The unit will provide students with an awareness of the wide range of technologies that are used to support this kind of application, but will examine only a limited number of these technologies to demonstrate the key concepts and their application.</p>\n<p>The unit will take a strongly practical focus in examining the technology issues involved, and highlight the key issues which a developer needs to address in developing applications of this kind for real-world systems.</p>',
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
										{operator: 'OR', items: ['ENG1060', 'ENG1014']},
										{operator: 'OR', items: ['ENG1013', 'ENG1003']},
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
		description:
			'<p>This unit focuses on modern software quality assurance and testing tools and techniques to assure the quality of software systems. Students will learn different quality aspects of quality attributes, e.g., reliability, human, and security. Students will design test cases and apply systematic testing techniques in the context of individual modules and entire systems, using appropriate tools and techniques to automate the testing process where possible. Finally, students will analyze and report code quality issues using modern code review practices with tools and measures.</p>',
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
					items: [{operator: 'OR', items: ['FIT2094', 'FIT3171']}],
				},
			},
		],
		description:
			'<p>Automation and the use of technological tools have resulted in the accumulation of vast volumes of data by modern business organisations. Data warehouses have been set up as repositories to store this data and improved techniques now result in the speedy collection and integration of such data. OLAP technology has resulted in the faster generation of reports and more flexible analysis based on the data repositories. This unit will explore the concepts of data warehousing and OLAP, covering the data processing technological requirements for data warehousing and OLAP and will provide hands on experience on designing data warehousing and OLAP systems.</p>',
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
					items: [{operator: 'AND', items: ['FZA3031']}],
				},
			},
			{
				type: 'prerequisite',
				requirement: {
					operator: 'AND',
					items: [{operator: 'AND', items: ['FIT1047', 'FIT2093']}],
				},
			},
		],
		description:
			'<p>This unit will provide students with an understanding of: OSI security architecture; common information risks and requirements; operation of encryption techniques; digital signatures; public key infrastructure; authentication and non-repudiation; intrusion detection and response; firewall defence; privacy and ethics issues; security configurations to PC-based applications; and design of information systems with security compliance and security standards and protocols.</p>',
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
						{operator: 'AND', items: ['FIT2073', 'FIT2096']},
					],
				},
			},
		],
		description:
			'<p>The principal development process focus of the unit will be on the social, legal and business context in which multimedia and games development companies must operate. You will work actively in teams on the development of a multimedia or games application or exhibit. Project teams will use project planning/management skills, and design and build a prototype of the project using appropriate software processes and methodologies. You will integrate multimedia, programming and technical knowledge in the development process. Requirements are fulfilled by the team producing an identified set of deliverables. The team must ensure that each deliverable is completed on schedule.</p>',
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
					items: [{operator: 'AND', items: ['FIT3039']}],
				},
			},
		],
		description:
			'<p>You will work actively in teams on the development of a multimedia or games application or exhibit. Using project planning/management skills along with other development procedures, you must then deliver a functional multimedia system or game, along with all requisite documentation, which integrates multimedia, programming, and technical knowledge in the development process. Requirements are fulfilled by the team producing an identified set of deliverables, usually a progress report, full system documentation, and functional project. The team must ensure that each deliverable is completed on schedule, with each member of the team demonstrating a significant contribution to the overall effort.</p>',
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
					items: [{operator: 'AND', items: ['FZA3077']}],
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
										{operator: 'OR', items: ['FIT2004', 'FIT2081']},
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
		description:
			'<p>This unit builds on introductory units to analysis and design. It provides the professional software engineer with advanced knowledge and skills in high-level architectural design, its theoretical foundations, industrial best practice, and relevant application context. In the software life-cycle, software architecture sits between analysis/specification and design/implementation. The field of software architecture has come of age with a thriving research community and numerous high-level models, methods, tools and practices widely used in industry.</p>',
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
		description:
			'<p>This unit includes history of artificial intelligence; intelligent agents; problem solving and search (problem representation, heuristic search, iterative improvement, game playing); knowledge representation and reasoning (extension of material on propositional and first-order logic for artificial intelligence applications, planning, frames and semantic networks); reasoning under uncertainty (belief networks); machine learning (decision trees, Naive Bayes, neural nets and genetic algorithms); language technology.</p>',
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
					items: [{operator: 'AND', items: ['FIT2096']}],
				},
			},
		],
		description:
			'<p>This unit introduces topics in Artificial Intelligence (AI) and Artificial Life (ALife) suited to real-time simulation and computer games development. Using a practice-based and programming-led approach, the unit explores elements of the history of these fields, and their application to games, the fields’ fundamental concepts and theory, as well as practical techniques and algorithms that can be used to build real-time, interactive games, virtual environments and simulations. Starting with basic concepts in 2D discrete simulation, the unit progresses to continuous 3D models, agent-based models, bio-inspired intelligence and search algorithms. Programs are developed primarily using C++.</p>',
	},
	{
		code: 'FIT3138',
		title: 'Real time enterprise systems',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: Completion of 12 points of level two units from Information Technology, Science or Engineering or equivalent.</p>',
		],
		requisites: [],
		creditPointPrerequisite: {points: 12, fitOnly: true, levelOnly: 2},
		description:
			'<p>This unit provides both a theoretical and practical overview of real time enterprise systems. Real time enterprise systems are configurable information systems packages, implemented on-line that integrate people, technology and information processing. The three integrated processes within and across functional areas are seamlessly interconnected and almost time-lag free in an organisation. Topics include systems and technology background, ES evolution, ES lifecycle, implementation and configuration, ES and electronic commerce and ES success and failure factors. The theoretical component will be augmented by detailed case studies which focus on problems faced by real-life companies. For the practical component, laboratory exercises using a well-known enterprise system will be used to deepen student understanding.</p>',
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
		description:
			'<p>This unit provides an overview of computational science and an introduction to its central methods. It covers the role of computational tools and methods in 21st century science, emphasising modelling and simulation. It introduces a variety of models, providing contrasting studies on: continuous versus discrete models; analytical versus numerical models; deterministic versus stochastic models; and static versus dynamic models. Other topics include: Monte-Carlo methods; epistemology of simulations; visualisation; high-dimensional data analysis; optimisation; limitations of numerical methods; high-performance computing and data-intensive research.</p>\n<p>A general overview is provided for each main topic, followed by a detailed technical exploration of one or a few methods selected from the area. These are applied in tutorials and laboratories which also acquaint students with standard scientific computing software (e.g., Mathematica, Matlab, Maple, Sage). Applications are drawn from disciplines including Physics, Biology, Bioinformatics, Chemistry, Social Science.</p>',
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
					items: [{operator: 'AND', items: ['FIT2004']}],
				},
			},
		],
		description:
			'<p>Modern computer systems contain parallelism in both hardware and software. This unit covers parallelism in both general purpose and application specific computer architectures and the programming paradigms that allow parallelism to be exploited in software. The unit examines shared memory and message passing paradigms in hardware and software; concurrency, multithreading and synchronicity; parallel, clustered and distributed supercomputing algorithms, languages and software tools and development environments. Students will learn to design and develop parallel algorithms in these paradigms, and apply technical writing and presentation to communicate parallel computing.</p>',
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
					items: [{operator: 'AND', items: ['FIT2083', 'FIT2004']}],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [{operator: 'AND', items: ['FIT3036']}],
				},
			},
		],
		description:
			"<p>This unit is intended to provide practical experience in designing, developing and testing a non-trivial computer science project. Projects are generally software-based, although sometimes they may involve hardware development or investigation of theory. Projects cover the whole process of software (or hardware) development, from analysis through design to implementation and testing. Comprehensive written documentation on the project is required. Students are assigned in groups to a project supervisor. There are no lectures in this unit, although students will be expected to attend regular meetings with their project supervisor. The application problem will normally be drawn from the student's field of specialisation.</p>",
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
					items: [{operator: 'AND', items: ['FIT2096', 'FIT2073']}],
				},
			},
		],
		description:
			'<p>This unit exposes students to a variety of industry standard games engine environments, game genres and development techniques. Students will develop an appreciation and basic working knowledge of a number of different platforms used in contemporary games development. The unit aims to provide students with a practical insight into contemporary, industry standard, games development process and games engines. The studio environment will facilitate considerable peer interaction, in particular through the analysis of game genres and the development of game prototypes.</p>\n<p>The unit provides knowledge and skills, which students can apply within their game development projects in the third year studio project/s (FIT3039/FIT3040) and across all subsequent units.</p>',
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
		creditPointPrerequisite: {points: 90},
		description:
			'<p>This unit will enable students to create new artefacts which utilise developments in information technology. The unit will combine the theoretical and technical skills gained in other units into a problem solving context and allow the students to gain the skills needed to create solutions of problems using technology. Students will learn valuable research and communication skills as they explore and create using a variety of technologies that support the making process. Student will have the opportunity to explore new technologies and undertake the prototyping and refinement process in an environment that supports independent learning. Students will have the opportunity to use technology to solve a problem which is of interest.</p>',
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
					items: [{operator: 'AND', items: ['ETX2250']}],
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
		description:
			'<p>There has been an explosion in the quantity and variety of data collected and routinely analysed by government, business and society at large over recent years. This has been described by some social commentators as the rise of "big data" and and the analysts and practitioners who investigate this data as "data scientists." This unit will introduce students to the analysis of big data and the role of the data scientist. Techniques covered include data management and transformation, visual analysis, social network analysis, statistical learning, clustering and natural language processing. Students will be introduced to these methods using open source industry standard software. Data and case studies will be drawn from diverse sources. The general principles of analysis, investigation and reporting will be covered. Students will be encouraged to critically reflect on the data analysis process within their own domain of interest.</p>',
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
					items: [{operator: 'AND', items: ['FIT2086']}],
				},
			},
		],
		description:
			'<p>This unit introduces the problem of machine learning and the major kinds of statistical learning used in data analysis. Learning and the different kinds of learning will be covered and their usage discussed. Evaluation techniques and typical application contexts will presented. A series of different models and algorithms will be presented in an exploratory way: looking at typical data, the basic models and algorithms and their use: linear and logistic regression, support vector machines, Bayesian networks, decision trees, random forests, k-means and clustering, neural-networks, deep learning, and others. Finally, two specialist topics will be covered briefly, statistical learning theory and working with big data.</p>',
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
					items: [{operator: 'AND', items: ['FIT2004']}],
				},
			},
		],
		description:
			'<p>This unit builds on the concepts learnt in introductory algorithms and data structures study. It covers advanced algorithmic paradigms and problem-solving techniques required to address real-world programming challenges. It explores, in depth, the design and analysis of space-efficient data structures and time-efficient problem solving strategies to be used with them. Topics include amortized analysis, advanced sorting and searching algorithms, new tree/string/graph data structures and algorithms, and number-theoretic algorithms amongst others.</p>',
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
					items: [{operator: 'OR', items: ['ETF2480', 'FZA3158']}],
				},
			},
		],
		creditPointPrerequisite: {points: 24, fitOnly: true, levelOnly: 1},
		description:
			"<div>\n<p>The objective of this unit is to introduce students to quantitative modelling techniques commonly used for business decision making. This includes the analytical methods used to understand, model and design business processes, and the application of IT tools to real-world decision making situations. Techniques covered include decision making under uncertainty, linear and nonlinear programming, sequential decision making, forecasting, and simulation.</p>\n<p>On completion of this unit, the students are expected to recognise a complex decision making situation and to build a corresponding quantitative model. They are also expected to solve the model by applying techniques covered in this unit, to interpret results and finally, to provide 'analyst-type' recommendations. The unit includes extensive use of advanced modelling tools available in Microsoft Excel. Students will also be made aware of simulation software as a tool for analysing business processes.</p>\n</div>\n<div> </div>",
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
					items: [{operator: 'OR', items: ['FIT2085', 'FIT1047', 'FIT1008']}],
				},
			},
		],
		description:
			'<p>This unit covers the internal mechanism of computers and how they are organised and programmed. Topics include combinatorial and sequential logic, Boolean Algebra, counters, ripple adders, tree adders, memory/addressing, busses, speed, DMA, data representation, machine arithmetic, microprogramming, caches and cache architectures, virtual memory and translation look-aside buffers, vectored interrupts, polled interrupts, pipelined architecture, superscalar architecture, data dependency, hazards, CISC, RISC, VLIW machine architectures.</p>',
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
					items: [{operator: 'AND', items: ['FIT2004']}],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [{operator: 'AND', items: ['FIT3144', 'FIT3163']}],
				},
			},
		],
		description:
			'<p>This unit provides practical experience in researching, designing, developing and testing a substantial computer science project. Projects are generally software-based, although sometimes they may involve hardware development or investigation of theory. Projects cover the whole process of software (or hardware) development, from analysis through design to implementation and testing. Comprehensive written documentation on the project is required. Students are assigned in groups to a project supervisor. Students will be expected to meet weekly with their project supervisor during formal lab sessions, and attend 2-hour project management seminars during the first six weeks. Other workshops relevant to research and development of the project will be held in the latter six weeks.</p>\n<p>The unit is the first part of a 12-credit point project sequence; the second part and exit point for the project is FIT3162.</p>',
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
					items: [{operator: 'AND', items: ['FIT3161']}],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [{operator: 'AND', items: ['FIT3144']}],
				},
			},
		],
		description:
			'<p>This unit provides practical experience in researching, designing, developing and testing a non-trivial computer science project. Projects are generally software-based, although sometimes they may involve hardware development or investigation of theory. Projects cover the whole process of software (or hardware) development, from analysis through design to implementation and testing. Comprehensive written documentation on the project is required. Students are assigned in groups to a project supervisor. There are no lectures in this unit, although you will be expected to attend regular meetings with your project supervisor.</p>\n<p>The unit is the second part of a 12-credit point project sequence; the first part and entry point for the project is FIT3161.</p>',
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
					items: [{operator: 'AND', items: ['FIT3161', 'FIT3144']}],
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
								{operator: 'OR', items: ['FIT1055', 'FIT1049']},
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
					items: [{operator: 'AND', items: ['FIT2086']}],
				},
			},
		],
		description:
			'<p>This unit provides practical experience in researching, designing, developing and evaluating a non-trivial data science project. Projects involve whole or part of the data science process (visualisation, analysis, algorithms, etc.) but can also be software-based, or they may involve investigation of theory. Projects if software-based should cover analysis through design to implementation and sting. Comprehensive written documentation on the project is required. Students are assigned in groups to a project supervisor. There are no lectures in this unit, although you will be expected to attend regular meetings with your project supervisor. The unit is the first part of a 12-credit point project sequence; the second part and exit point for the project is FIT3164.</p>',
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
					items: [{operator: 'AND', items: ['FIT3163']}],
				},
			},
			{
				type: 'prohibitions',
				requirement: {
					operator: 'AND',
					items: [{operator: 'AND', items: ['FIT3144']}],
				},
			},
		],
		description:
			'<p>This unit provides practical experience in researching, designing, developing and testing a non-trivial data science project. Projects involve whole or part of the data science process (visualisation, analysis, algorithms, etc.) but can also be software-based, or they may involve investigation of theory. Projects if software-based should cover analysis through design to implementation and testing. Comprehensive written documentation on the project is required. Students are assigned in groups to a project supervisor. There are no lectures in this unit, although students will be expected to attend regular meetings with their project supervisor. The unit is the second part of a 12-credit point project sequence; the first part and entry point for the project is FIT3163.</p>',
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
		description:
			'<p>The unit introduces computer networks with an explicit software and system-centric focus. It provides foundation skills in data communications, networks, and associated software interfaces, and introduces basic principles in network design, configuration, management and security.</p>',
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
					items: [{operator: 'AND', items: ['FIT2093']}],
				},
			},
		],
		description:
			'<p>This unit provides a broad coverage of digital ICT forensics. You will examine definitions of evidence as they apply to investigations involving the seizure and examination of information technology devices. The unit will introduce you to various tools, techniques and algorithms that may be employed by investigators for acquisition, preservation and analysis of evidence. Disk-based (local) and network (remote) forensic environments will be explored. You will also learn of the impediments and complicating factors that can threaten forensic investigations.</p>',
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
					items: [{operator: 'OR', items: ['FIT1033', 'DIS1911']}],
				},
			},
		],
		description:
			'<p>FIT3169 introduces students to immersive environment design and production principles using game engine prototyping software. Building upon the 3D creation and editing skills in the prerequisite unit FIT1033 Foundations of 3D, students will learn how to create game levels, import assets (models, sounds, animations), and extend supplied code to visualise interactive virtual environments for a range of applications and devices.</p>',
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
					items: [{operator: 'AND', items: ['FIT2101', 'FIT2107']}],
				},
			},
			{
				type: 'corequisite',
				requirement: {
					operator: 'AND',
					items: [{operator: 'AND', items: ['FIT3077', 'FIT2004']}],
				},
			},
		],
		description:
			'<p>In this unit, students will undertake a full-year software development project in a self-managing team. Students will apply the skills they learned in prerequisite and co-requisite units to a larger project than any they have encountered to date. Through attempting larger-scale software development they will learn how the techniques they have encountered in isolation work together as an integrated methodology to make such complex projects feasible.</p>\n<p>The project will be managed through a heavyweight process model such as the Spiral Model, to ensure students are exposed to a representative example of both heavyweight and lightweight processes (which are covered in FIT2101) through the BSE core.</p>\n<p>For the first time in their degrees, students will solicit and document requirements from client proxies who are not IT professionals. This builds their communication skills with other stakeholders in preparation for the industry-based project or IBL.</p>',
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
					items: [{operator: 'AND', items: ['FIT2094']}],
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
		description:
			'<p>This unit will provide an introduction to the concepts of database design and usage and the related issues of data management. You will develop skills in planning, designing, and implementing a data model using an enterprise-scale relational database system (Oracle). Methods and techniques will also be presented to populate, retrieve, update and implement integrity features on data in the implemented database system.</p>',
	},
	{
		code: 'FIT3172',
		title: 'Sonics',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: 24 credit points of second year units</p>',
		],
		requisites: [],
		creditPointPrerequisite: {points: 24, levelOnly: 2},
		description:
			'<p>This unit focuses on the capture, editing and creation/generation of digital sounds and soundscapes for virtual reality environments and games. Students will gain an understanding of the physical and acoustic properties of digital sounds, their communicative capacities, and learn how to layer, manipulate, synthesise and adaptively code digital sound waveforms. In their assignments, students will apply this understanding in the design and creative production of a soundscapes, soundtracks and the sound design of immersive environments.</p>',
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
					items: [{operator: 'AND', items: ['FZA3173']}],
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
		description:
			'<p>This unit aims to introduce secure software development issues from the design stage, through to implementation, testing and deployment. Topics studied include the secure software development life cycle, secure software design principles, threat evaluation models, secure coding and development practices, software security testing, deployment and maintenance. Students are provided with a range of practical exercises and tasks to reinforce their skills including: identification of security bugs in programs written in different programming languages, design, implementation, and testing of secure concurrent and networked applications and identification of vulnerabilities in networked and mobile/wireless applications.</p>',
	},
	{
		code: 'FIT3174',
		title: 'IT strategy and governance',
		offerings: ['First semester'],
		enrolmentRules: [
			'<p>Prerequisite: Completion of 24 points of second year level of IT or its equivalent study</p>',
		],
		requisites: [],
		creditPointPrerequisite: {points: 24, fitOnly: true, levelOnly: 2},
		description:
			'<p>This unit provides students with an understanding of how to manage and govern the IT function in business organisations. It builds on themes relating to managing IT as an organisational resource and discusses IT function from strategy and governance perspectives. The unit also emphasises the relationship between theoretical knowledge and its practical application using cases and real examples.</p>\n<p>Core concepts discussed in this unit include the strategic context of IT management, alignment between business strategy and IT strategy, IT governance processes, various types of IT processes, organising and managing the IT function (including the role of the CIO), legal and ethical concerns of IT, evaluating IT portfolio management, IT provisioning issues, including outsourcing and budgeting.</p>',
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
		description:
			'<p>This unit explores the underpinning theories, principles and practices of interface design to achieve usable computer-based systems. It examines issues in the design of system interfaces from a number of perspectives: user, programmer, designer. It explores the application of the relevant theories in practice. The unit will cover topics such as methods and tools for developing effective user interfaces, evaluation methods such as the conduct of usability and heuristic evaluations, design of appropriate interface elements including the design of menus and other interaction styles. The unit will also focus on designing for a diverse range of users and environments.</p>',
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
					items: [{operator: 'OR', items: ['FIT2094', 'FIT3171']}],
				},
			},
		],
		description:
			'<p>This unit will introduce advanced concepts in the areas of database design, including document-store, column-store, and graph database design; implementations in non-relational database systems.</p>',
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
		description:
			'<p>This unit focuses on the design, development and deployment of mobile apps for iOS using the Swift programming language. Students will learn best practices for iOS development using native frameworks and common design patterns. The unit will explore areas such as mobile UI design, data storage, web services and networking, mobile sensors, use of media, and mobile interface testing. The unit will emphasise hands-on, practical experience with the Xcode development environment and iOS simulator. Students will design and build their own app.</p>',
	},
	{
		code: 'FIT3179',
		title: 'Data visualisation',
		offerings: ['Second semester'],
		enrolmentRules: [
			'<p>Prerequisite: Completion of 24 points at first year.</p>',
		],
		requisites: [],
		creditPointPrerequisite: {points: 24, levelOnly: 1},
		description:
			'<p>Data visualisation is a powerful technique that allows us to use our visual system to understand data. Interactive data visualisation is now common in business, engineering and design and the social and physical sciences. This unit introduces the main kinds of information graphics and interactive visualisation systems and their areas of application. It investigates the reasons why visualisation can be effective and based on this students will gain experience in critically assessing data visualisations and in designing their own visualisations. You will learn how to create visualisations with representative computer tools and gain experience in creating a data visualisation for an application domain of their choice.</p>',
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
					items: [{operator: 'AND', items: ['FIT1052']}],
				},
			},
		],
		description:
			'<p>The aim of this unit is to examine the role of information and communication technologies (ICT), systems and hardware infrastructure that underpins secure delivery of the modern health services. Case studies of Picture Archive and Communication Systems (PACS) and Radiology Information Systems (RIS) will be covered more in depth, together with an overview of other health related software applications such as the Electronic Patient Record (EPR), medical classification schemas/ontologies, medical data standards and interoperability. The opportunities that new data analytics and artificial intelligence approaches offer to transform the modern healthcare will be reviewed in practical sessions. Students will also explore project and change management issues and learn how they impact efficiency of medical practice.</p>',
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
					items: [{operator: 'AND', items: ['FIT2086']}],
				},
			},
		],
		description:
			'<p>Deep learning (DL) has been fuelling Artificial Intelligence (AI) and the Fourth Industrial Revolution in recent years. The success of DL in many applications, including generative AI such as ChatGPT or DALL·E, has gained rocketed attention and becomes a highly demanded skill across industries and sectors. It is transforming innovations, powering new applications and impact our society in everyday activities. In this unit, the students will learn the foundations of deep learning theory within a broader context of machine learning. At the same time, they will gain hands-on practical skills on how to apply DL to real-world applications across a range of AI cognitive tasks in computer vision such as image and object recognition, in natural language processing such as text classification using deep neural embeddings. Learning activities will focus on understand the fundamental concepts in DL such as neural networks (NN), convolutional NN, backpropagation and optimisation for deep learning, adversarial robustness, attention mechanism, transformer, important concepts in deep generative AI (VAE, GAN), in combination with laboratory sessions to gain hands-on experiences.</p>',
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
								{operator: 'OR', items: ['FIT2094', 'FIT3171']},
								'FIT2004',
							],
						},
					],
				},
			},
		],
		description:
			'<p>Data engineering is about developing the software (and hardware) infrastructure to support data science. This unit introduces software tools and techniques for data engineering, but not hardware. It will cover an introduction to big data processing, covering volume, variety, and velocity; large volume data processing using parallel technologies; variety data formats, including unstructured and semi-structured data, using NoSQL databases; and velocity data processing, covering data streaming.</p>',
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
					items: [{operator: 'AND', items: ['ITI9004', 'MAT1077', 'MTH1112']}],
				},
			},
		],
		description:
			"<p>This unit introduces fundamental discrete mathematics topics including combinatorics, sets, relations and functions; methods of logic and proof, especially proof by induction; probability theory, Bayes' theorem; recursion; recurrence relations; trees and other graphs. It establishes the mathematical basis required for studies in Computer Science and Software Engineering.</p>",
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
		description:
			'<p>The unit covers linear algebra (vectors, equations of lines and planes, solutions of simultaneous equations, determinates, Gauss elimination, Gauss-Jordan method), calculus topics (differentiation, parametric differentiation, fundamental theorem of calculus, and numerical integration), an introduction to multivariable calculus (functions of several variables, partial derivatives, tangent planes and directional derivatives), and the construction of splines and Taylor series expansions are also covered.</p>',
	},
] as Unit[]

export default units
