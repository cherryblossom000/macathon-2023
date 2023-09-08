'use strict'

const path = require('node:path')
const tsconfigRootDir = __dirname
const projects = [
	'frontend/tsconfig.json',
	'backend/tsconfig.json',
	'shared/tsconfig.json',
]

module.exports = {
	root: true,
	ignorePatterns: ['dist/'],
	reportUnusedDisableDirectives: true,
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': 1,
	},
	env: {es2023: true},
	overrides: [
		{
			files: '.eslintrc.cjs',
			env: {node: true},
		},
		{
			files: '{backend,frontend,shared}/**/*.ts',
			extends: [
				'plugin:@typescript-eslint/recommended-type-checked',
				'plugin:@typescript-eslint/stylistic-type-checked',
				'plugin:@typescript-eslint/strict-type-checked',
			],
			parserOptions: {
				projects: [
					'frontend/tsconfig.json',
					'backend/tsconfig.json',
					'shared/tsconfig.json',
				],
				tsconfigRootDir: __dirname,
				warnOnUnsupportedTypeScriptVersion: false,
				EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
			},
			rules: {
				'@typescript-eslint/no-confusing-void-expression': 0,
				'@typescript-eslint/no-non-null-assertion': 0,
			},
			settings: {
				'import/resolver': {
					typescript: {
						project: projects.map(project =>
							path.join(tsconfigRootDir, project),
						),
					},
				},
			},
		},
	],
}
