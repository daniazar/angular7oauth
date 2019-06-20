https://cloud.digitalocean.com/v1/oauth/token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&grant_type=authorization_code&code=AUTHORIZATION_CODE&redirect_uri=CALLBACK_URL
const express = require('express')
const rp = require('request-promise')


const app = express()


app.get('/token', (req, res) => {
    var options = {
        method: 'POST',
        uri: req.query.url,
        body: {
            some: 'payload'
        },
        headers:{
           // 'Authorization': 
        },
        json: true // Automatically stringifies the body to JSON
    };
  rp(options)
    .then((data) => {
      res.render('index', data)
    })
    .catch((err) => {
      console.log(err)
      res.render('error')
    })
})

app.listen(3000)