"use strict";

const clientio=require('socket.io-client')
const host ='http://localhost:3000/caps'
const connectcapSpace=clientio.connect(host)


connectcapSpace.on('pickup',payload =>{
  setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderID}`);
        connectcapSpace.emit('in-transit', payload);
      }, 1500);

      setTimeout(() => {
            console.log(`DRIVER: delivered  up ${payload.orderID}`);
            connectcapSpace.emit('delivered', payload);
          }, 3000);
    });



