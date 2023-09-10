import bodyParser from 'body-parser'
import express from 'express'
import getCourse from './api/course.js'
import generateSchedules from './api/schedules.js'
import getSpecialisation from './api/specialisation.js'
import getUnit from './api/units.js'
import getUnits from './api/unit.js'

const app = express()

app.use(bodyParser.json())
app.get('/course', getCourse)
app.get('/specialisation', getSpecialisation)
app.get('/unit', getUnit)
app.get('/units', getUnits)
app.post('/schedules', generateSchedules)

const port = Number(process.env.PORT ?? 3000)
app.listen(port, () => console.log('listening on port', port))
