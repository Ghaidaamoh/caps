"use strict";

const io=require('socket.io-client')
const host= 'http://localhost:3000/caps'
const connectcapSpace=io.connect(host)
// const event = require("./events.js");

connectcapSpace.emit('getAll');
connectcapSpace.on("pickup", pickUpOrder);

function pickUpOrder(payload) {
  
  console.log(`DRIVER: will get the order :`, payload.orderId);
  connectcapSpace.emit('received', payload.orderId);
  
       console.log(`Driver: picked up ${payload.orderId}`);
  setTimeout(() => {
    connectcapSpace.emit("in-transit", payload);
  }, 1000); 
  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderId}`);
    connectcapSpace.emit("delivered", payload);
  }, 3000);
}