'use strict'

const path = require('node:path')
const tsconfigRootDir = __dirname
const projects = [
	// 'backend/tsconfig.json',
	'frontend/tsconfig.json',
	'frontend/tsconfig.node.json',
	'scraper/tsconfig.json',
	'shared/tsconfig.json',
]

module.exports = {
	root: true,
	ignorePatterns: ['dist/'],
	reportUnusedDisableDirectives: true,
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		eqeqeq: 1,
		'prettier/prettier': 1,
	},
	env: {es2023: true},
	overrides: [
		{
			files: '.eslintrc.cjs',
			env: {node: true},
		},
		{
			files: '{backend,frontend,shared,scraper}/**/*.ts',
			extends: [
				'plugin:@typescript-eslint/recommended-type-checked',
				'plugin:@typescript-eslint/stylistic-type-checked',
				'plugin:@typescript-eslint/strict-type-checked',
			],
			settings: {
				'import/resolver': {
					typescript: {
						project: projects.map(project =>
							path.join(tsconfigRootDir, project),
						),
					},
				},
			},
			parserOptions: {
				project: projects,
				tsconfigRootDir: __dirname,
				warnOnUnsupportedTypeScriptVersion: false,
				EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
			},
			rules: {
				'@typescript-eslint/no-confusing-void-expression': 0,
				'@typescript-eslint/no-non-null-assertion': 0,
			},
		},
	],
}
