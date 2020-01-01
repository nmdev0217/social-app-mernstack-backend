const express = require('express')
const bodyParser = require('body-parser')

const placesRoutes = require('./routes/places-routes')

const app = express()

app.use(placesRoutes)

app.listen(3000, () => console.log('Listining to port 3000'))
