"use strict";

const clientio=require('socket.io-client')
const host ='http://localhost:3000/caps'
const connectcapSpace=clientio.connect(host)
const faker= require('faker')
 
setInterval(() => {
    let payload = {
      store: "Ghaidaa",
      orderID: faker.datatype.uuid(),
      customer: faker.name.findName(),
      address: faker.address.streetAddress(),
    };
  
    connectcapSpace.emit('pickup', payload);
  }, 5000);
  

  connectcapSpace.on('delivered', (payload) => {
      console.log(`thank you for delivering ${payload.orderID}`);
      
    });

