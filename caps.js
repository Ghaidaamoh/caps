"use strict";

const { Socket } = require('socket.io-client');

const port = 3000;
const io = require('socket.io')(port) //http://localhost:3000
const capSpace = io.of('/caps') //http://localhost:3000/caps


capSpace.on('connection', socket => {
  console.log('connected to cap');


  socket.on('pickup', payload => {
    console.log("Event ", {
      event: "pickup",
      time: new Date().toISOString(),
      payload: payload,
    })
    capSpace.emit('pickup', payload)
  })

  socket.on('in-transit', payload => {
    console.log("Event ", {
      event: "in-transit",
      time: new Date().toISOString(),
      payload: payload,
    })
    capSpace.emit('in-transit', payload)
  })
socket.on('delivered',payload =>{
  console.log("Event ", {
    event: "delivered",
    time: new Date().toISOString(),
    payload: payload,
  })
  capSpace.emit('delivered', payload)
  
})
})



























