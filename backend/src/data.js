import { readFile, readdir } from 'node:fs/promises';
const dataDir = new URL('../../scraper/data/', import.meta.url);
const readStuff = async (path) => {
    const dir = new URL(path, dataDir);
    return readdir(dir).then(paths => Promise.all(paths.map(path => readFile(new URL(path, dir), 'utf8').then(JSON.parse))));
};
export const courses = await readStuff('courses/');
export const specialisations = await readStuff('specialisations/');
let bad = ["FIT3047", "FIT2032"];
export const units = (await readStuff('units/')).filter(x => x.code != "FIT3047" && x.code != "FIT2032");
export const unitsMap = new Map(units.map(u => [u.code, u]));
//# sourceMappingURL=data.js.map