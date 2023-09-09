import {readFile, readdir} from 'node:fs/promises'
import type {Unit} from 'shared'

const dir = new URL('../data/units/', import.meta.url)
await readdir(dir).then(paths => {
	return Promise.all(
		paths.map(path =>
			readFile(new URL(path, dir), 'utf8').then(s => {
				const {code, enrolmentRules} = JSON.parse(s) as Unit
				if (enrolmentRules.length) {
					console.log(`${code} enrolment rules`)
					enrolmentRules.forEach(x => console.log(x))
					console.log()
				}
			}),
		),
	)
})
