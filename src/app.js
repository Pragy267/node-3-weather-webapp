const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()

const directoryPath = path.join(__dirname, '../public')
const viewPaths = path.join(__dirname, '../templates/views')
const partialPaths = path.join(__dirname, '../templates/partials')
const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/{address}.json?access_token=pk.eyJ1Ijoic2F4ZW5hcHJhZ3lhMjIiLCJhIjoiY2s3NW1wN2NsMDNqOTNlcDNkdDVtZXB1dCJ9.qBOBKLUfBQoZtjYvT9swiw';

app.set('view engine', 'hbs')
app.set('views', viewPaths)
hbs.registerPartials(partialPaths)

app.use(express.static(directoryPath))

app.get('', (req, res) => {
  res.render('index.hbs', {
    title: 'Weather App',
    name: "Pragya Saxena",
    createdBy: 'Pragya Saxena'
  })
})

app.listen(3000, () => {
  console.log('Server is up')
})

app.get('/help', (req, res) => {
  res.render('help.hbs', {
    title: 'On the Help Screen ? ',
    msg: 'On the help page',
    createdBy: 'Pragya Saxena'
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'I am a sexy Girl !! ',
    name: 'Pragya Saxena',
    createdBy: 'Pragya Saxena'
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    res.send({
      error: 'you must provide address'
    })
  }
  const address = req.query.address
  const resff = []
  app.get((mapBoxURL.replace('{address}', address)), (geoData, geodatares) => {
    if (error) {
      res.send(error)
    }
    // const center = geodatares.body.features[2].center;
    // const longitude = center[0];
    // const latitude = center[1];
    console.log(geodatares)
    resff = geodatares
   })
 res.send(resff)
})

