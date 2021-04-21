const express = require('express');
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express();
 
app.set('view engine', 'hbs') // setting up the handlebar. The hbs file is the views dir.  Express automatically expects folder named 'views'.
app.set('views', path.join(__dirname, './templates/views')) // setting up thecustom dir for handlebat files
hbs.registerPartials( path.join(__dirname, './templates/partials'))


app.use(express.static(path.join(__dirname, '../public'))) //Set up static files:  uses html files from the public folder home route to serve

app.get('', (req, res) => {
    res.render('index', 
        // setting up the second arg
        {
            title: 'Weather',
            type: 'Broadcast',
            name: 'Mbulelo'
        }
    )
})

app.get('/help', (req, res) => {
    res.render('help', 
        // setting up the second arg
        {
            title: 'Help Page',
            message: 'How can we help you?',
            name: 'Mbulelo'
            
        }
    )
})

app.get('/weather', (req, res) => {

    if(!req.query.city){
        return res.send({
            err: 'Please enter a city'
        })
    }

    geocode(req.query.city, (err, {location} = {}) => {
        if(err){
            return res.send({err})
        }

        forecast(location, (err, forecastData) => {
            if(err){
                return res.send({err})
            }
            res.send({ 
                forecast: forecastData,
                location,
                city: req.query.city 

            
            })
        })
    })
    // res.send(
    //     {
    //         forecast: 'Snowing',
    //         location: 'Philly',
    //         city: req.query.city           
    //     }
    // )
})


app.get('/products', (req, res) => {
    res.send(
        {
            title: 'product',
            message: 'How can we help you?',
            name: 'Mbulelo'
            
        }
    )
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Help article not found.'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Page not found!'
    })
})
app.listen(3000, () => {
    console.log('Server running on port 3000')
})