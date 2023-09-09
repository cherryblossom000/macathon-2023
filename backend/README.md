# backend docs

```ts
import {api} from 'shared'
```

If the below docs say it returns `T`, it actually returns a `api.Response<T>`

## GET `/course?code=<code>`

gets course info

- `code`: course code
- returns `api.GetCourseResponse`

## GET `/specialisation?code=<code>`

gets specialisation info

- `code`: specialisation code
- returns `api.GetSpecialisationResponse`

## GET `/unit?code=<code>`

gets unit info

- `code`: unit code
- returns `api.GetUnitResponse`

## GET `/units`

gets all units

- `code`: unit code
- returns `api.GetUnitResponse`

## POST `/schedules`

generates schedules

- JSON body: `api.GenerateSchedulesRequest`
- returns `api.GenerateSchedulesResponse`
