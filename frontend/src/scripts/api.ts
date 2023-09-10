import {
	api,
	type Course,
	type Schedule,
	type ScheduleParametersUnit,
	type Specialisation,
	type Unit,
} from 'shared'

const API_BASE = 'https://macathon-2023.cherryblossom00.repl.co/api'
// const API_BASE = 'https://macathon-2023.vercel.app/api'
// const API_BASE =
// 	'https://macathon-2023-cpr0gx1dd-cherryblossom000.vercel.app/api'
// const API_BASE = 'http://localhost:3000/api'

const handleAPIResponse = async <T>(res: Promise<Response>): Promise<T> => {
	const result = (await (await res).json()) as api.Response<T>
	if (result.type === 'error')
		throw new Error(
			typeof result.data === 'string'
				? result.data
				: JSON.stringify(result.data, null, 2),
		)
	return result.data
}

export const getCourse = async (code: string): Promise<Course> =>
	handleAPIResponse<api.GetCourseResponse>(
		fetch(`${API_BASE}/course?code=${code}`),
	)
export const getSpecialisation = async (
	code: string,
): Promise<Specialisation> =>
	handleAPIResponse<api.GetSpecialisationResponse>(
		fetch(`${API_BASE}/specialisation?code=${code}`),
	)
export const getUnit = async (code: string): Promise<Unit> =>
	handleAPIResponse<api.GetUnitResponse>(fetch(`${API_BASE}/unit?code=${code}`))

export const getAllUnits = async (): Promise<Unit[]> =>
	handleAPIResponse<api.GetUnitsResponse>(fetch(`${API_BASE}/units`))

export const generateSchedules = async (
	units: ScheduleParametersUnit[],
	numYears: 3 | 4 | 5 = 3,
): Promise<Schedule[]> =>
	handleAPIResponse<api.GenerateSchedulesResponse>(
		fetch(`${API_BASE}/schedules`, {
			method: 'POST',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				units,
				numYears,
			} satisfies api.GenerateSchedulesRequest),
		}),
	)
