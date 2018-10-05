
import express from 'express'
import http from 'http'
import io from 'socket.io'
import body_parser from 'body-parser'
import path from 'path'
import eos from './config'

const app = express()
const server = http.createServer(app)
const socket = io(server)
app.socket = socket;




app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: false
}));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

import createapp from './routes/createapp';
import cancelapp from './routes/cancelapp';
import endapp from './routes/endapp';
import createrole from './routes/createrole';
import createhosp from './routes/createhosp';
import deletehosp from './routes/deletehosp';
import adddoctor from './routes/adddoctor';
import addpatient from './routes/addpatient';
import addtimeslot from './routes/addtimeslot';
import assigndoc from './routes/assigndoc';
import get_table_rows from './routes/gettablerows'
import doctorbyid from './routes/doctorbyid'



app.use('/gettablerows', get_table_rows)
app.use('/createapp', createapp)
app.use('/cancelapp', cancelapp)
app.use('/endapp', endapp)
app.use('/createrole', createrole)
app.use('/createhosp', createhosp)
app.use('/deletehosp', deletehosp)
app.use('/adddoctor', adddoctor)
app.use('/addpatient', addpatient)
app.use('/addtimeslot', addtimeslot)
app.use('/assigndoc', assigndoc)
app.use('/doctorbyid', doctorbyid)



server.listen('5000', () => {
    const sockets = require('./socket')
    console.log('listing 5000')
});

module.exports = app
