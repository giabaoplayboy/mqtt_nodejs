const express = require('express')
const app = express()
const port = 3000
const mqtt = require('mqtt')
const cors = require('cors')



app.use(cors())

var options = {
    port: 23640,
    host: 'mqtt://168.138.165.18',
    clientId: 'mqttjs_' + Math.random().toString(16).slice(3),
    username: 'taikhoansv',
    password: 'MatKhauMQTT+075800',
    reconnectPeriod: 1000,
    encoding: 'utf8'
};



var client = mqtt.connect('mqtt://168.138.165.18', options);

const topics = ['SanVuon/Den','SanVuon/HoBoi','PhongBep/BepDien','PhongBep/TuLanh']
const data = []


    client.on('connect', () => {
        console.log('Connected')
        client.subscribe(topics, (topic) => {
        console.log(`Subscribe to topic '${topics}'`)
        })
        
  

    client.on('message', (topic, message) => {
        const item = {

        }

        data.push(message.toString())
    })
})
app.get('/', (req, res) => {

    console.log(data)
    res.send(data)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})