// const app = require('express')()
// const body_parser = require('body-parser')
// const Eos = require('eosjs')
// const request = require('request')
// const http = require('http').Server(app)
// const io = require('socket.io')(http);
// const axios = require('axios');
// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/chainchat";

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
    res.sendFile(path.join(__dirname + '/public/home.html'))
})

//app.get('/thread', (req, res) => {
//    res.sendFile(path.join(__dirname + '/public/thread.html'))
//})
//app.get('/create', (req, res) => {
//    res.sendFile(path.join(__dirname + '/public/create.html'))
//})

import appointment from './routes/appointment';
import hospital from './routes/hospital';
import docrole from './routes/docrole';
import wallet_unlock from './routes/walletunlock'
import get_table_rows from './routes/gettablerows'

app.use('/gettablerows', get_table_rows)
app.use('/wallet-unlock', wallet_unlock)
app.use('/hospital', hospital)
app.use('/docrole', docrole)
app.use('/appointment', appointment)

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database connected!");
//     // db.close();
// });





// const config = {
//     chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f', // 32 byte (64 char) hex string
//     keyProvider: ['5K4bXrkKykqGbgyVVjAAgm8a39LoC9eetymUX8Tp9ZJdxu9TV1M', '5J5LL5FBhhEPX7YJFgZs2Fdww6QT4Gqfj9bFi2LgsXtjJiuKw4K', "5KZRvUWkXNSnrRukF7WiS6mcyY92r5EEuohHsahfSevSwZGcj6i", "5Kg4NdzLFRsbfd6hGkjBC1LYcJABCTgAtN4DMtP1BsqdYovDu3E"], // WIF string or array of keys..
//     httpEndpoint: 'http://178.62.92.215:8888',
//     expireInSeconds: 60,
//     broadcast: true,
//     verbose: false, // API activity
//     sign: true
// }

// const eos = Eos(config)



// app.post('/getblock/:id', (req, res) => {
//     eos.getBlock({
//         block_num_or_id: req.params.id
//     }, (error, data) => {
//         if (error) {
//             return res.json({
//                 data: null,
//                 err: error
//             })
//         }
//         res.json({
//             data: data
//         })
//     })
// })

// app.post('/transaction', (req, res) => {
//     eos.transaction({
//         "actions": [{
//             "account": req.body.account,
//             "name": req.body.action,
//             "username": req.body.account,
//             "authorization": [{
//                 "actor": req.body.account,
//                 "permission": "active"
//             }],
//             "data": {
//                 "account": req.body.account,
//                 "username": req.body.username
//             }

//         }],
//     }).then((result) => {
//         return res.json(result)
//     }).catch((err) => {
//         console.log(err)
//         return res.json(err)
//     })
// })

// app.post('/gettablerows', (req, res) => {
//     eos.getTableRows({
//         scope: req.body.scope,
//         code: req.body.code,
//         table: req.body.table,
//         json: true
//     }, (error, data) => {
//         return res.json({
//             error,
//             data
//         })
//     })
// })

// app.post('/createaccount', (req, res) => {
//     eos.newaccount({
//         creator: 'eosio',
//         name: "game21",
//         owner: req.body.publicKey,
//         active: req.body.publicKey
//     }).then((data) => {
//         return res.json({
//             data,
//             "success": true
//         })
//     }).catch((err) => {
//         return res.json({
//             err,
//             "success": false
//         })
//     })
// })

// app.post('/getcontract', (req, res) => {
//     eos.contract({
//         account: req.body.account
//     }, (error, myaccount) => {
//         res.json(myaccount)
//         // myaccount.update({
//         //     "timestamp": "2018-08-23T06:43:19.000",
//         //     "ref_block_prefix": 517713211,
//         //     "ref_block_num": 6466,
//         //     "actions": ["caratred"]
//         // }, (error, data) => {
//         //     console.log(error)
//         //     return res.json({
//         //         error,
//         //         data
//         //     })
//         // })
//     })

// })


// app.get('/getproducers', (req, res) => {
//     axios.post('https://eosapi.blockmatrix.network/v1/chain/get_producers', {
//             "json": true,
//             "limit": 200
//         })
//         .then(function (response) {
//             return res.json(response.data)
//         })
//         .catch(function (error) {
//             console.log(error)
//         });
// })

// app.get('/getabp', (req, res) => {
//     axios.post('https://eosapi.blockmatrix.network/v1/chain/get_producers', {
//             "json": true,
//             "limit": 200
//         })
//         .then(function (response) {
//             console.log(response.data)
//             let abp = response.data.rows.filter((data, index) => {
//                 return data.is_active == true ? data : null
//             })
//             return res.json(abp)
//         })
//         .catch(function (error) {
//             console.log(error)
//             return res.json({
//                 error
//             });
//         });
// })

// app.post('/getaccount', (req, res) => {
//     eos.getAccount({
//         "account_name": req.body.name
//     }, (error, data) => {
//         if (error) {
//             return res.json(error)
//         }
//         return res.json(data)
//     })
// })


// app.post('/createtopic', (req, res) => {
//     eos.transaction({
//         actions: [{
//             account: req.body.account,
//             name: req.body.name,
//             //username": req.body.username,
//             authorization: [{
//                 actor: req.body.actor,
//                 permission: "active"
//             }],
//             data: {
//                 created_by: req.body.created_by,
//                 title: req.body.title,
//                 description: req.body.description,
//                 category: req.body.category,
//                 created_at_str: req.body.created_at_str,
//                 channel_name_str: req.body.channel_name_str,
//                 thread_url: req.body.thread_url,
//                 deleted: 'false',
//                 unique_id_str: req.body.unique_id_str
//                 //desc: req.body.desc,
//                 //"username": req.body.username
//             }

//         }],
//     }).then((result) => {
//         return res.json(result)
//     }).catch((err) => {
//         console.log(err)
//         return res.json(err)
//     })
// })


// app.delete('/deletetopic/:id', (req, res) => {
//     eos.transaction({
//         actions: [{
//             account: req.body.account,
//             name: req.body.name,
//             // username: req.body.username,
//             authorization: [{
//                 actor: req.body.actor,
//                 permission: "active"
//             }],
//             data: {
//                 unique_id_str: req.body.unique_id_str,
//                 deleted_by: req.body.deleted_by,
//                 deleted_at_str: req.body.deleted_at_str
//             }

//         }],
//     }).then((result) => {
//         return res.json(result)
//     }).catch((err) => {
//         console.log(err)
//         return res.json(err)
//     })
// })

// app.get('/getthreadmessages/:id', (req, res) => {
//     // return res.json({
//     //     message: "comming soon"
//     // })
//     eos.getTableRows({
//         scope: req.body.scope,
//         code: req.body.code,
//         table: req.body.table,
//         json: true
//     }, (error, data) => {
//         return res.json({
//             error,
//             data
//         })
//     })
// })

// app.post('/sendmessage', (req, res) => {
//     eos.transaction({
//         actions: [{
//             account: req.body.account,
//             name: req.body.name,
//             // username: req.body.username,
//             authorization: [{
//                 actor: req.body.actor,
//                 permission: "active"
//             }],
//             data: {
//                 created_by: req.body.created_by,
//                 created_at_str: req.body.created_at_str,
//                 text: req.body.text,
//                 web_url: req.body.web_url,
//                 thread_url: req.body.thread_url,
//                 channel_name_str: req.body.channel_name_str,
//                 unique_id_str: req.body.unique_id_str
//             }

//         }],
//     }).then((result) => {
//         return res.json(result)
//     }).catch((err) => {
//         console.log(err)
//         return res.json(err)
//     })
// })

// app.delete('/deletemessage/:id', (req, res) => {
//     eos.transaction({
//         actions: [{
//             account: req.body.account,
//             name: req.body.name,
//             // username: req.body.username,
//             authorization: [{
//                 actor: req.body.actor,
//                 permission: "active"
//             }],
//             data: {
//                 unique_id_str: req.body.unique_id_str,
//                 deleted_by: req.body.deleted_by,
//                 deleted_at_str: req.body.deleted_at_str
//             }

//         }],
//     }).then((result) => {
//         return res.json(result)
//     }).catch((err) => {
//         console.log(err)
//         return res.json(err)
//     })
// })

// app.get('/getlatestthread', (req, res) => {
//     eos.getTableRows({
//         scope: req.body.scope,
//         code: req.body.code,
//         table: req.body.table,
//         json: true
//     }, (error, data) => {
//         return res.json({
//             error,
//             data
//         })
//     })
// })

// const users = []
// io.on('connection', (socket) => {
//     users.push(socket)
//     console.log('a user connected');
//     socket.on('chat', function (msg) {
//         users.map((user, index) => {
//             user.emit('chatMessage', msg)
//         })
//     });

//     socket.on('disconnect', (socket) => {
//         users.map((user, index) => {
//             if (socket.id == user.id) {
//                 users.slice(index, 1)
//             }
//         })
//         console.log('a user disconnected');
//     });
// });


// http.listen(3000, (error) => {
//     console.log(`listing 3000 port`)
// })

server.listen('5000', () => {
    const sockets = require('./socket')
    console.log('listing 5000')
});

module.exports = app
