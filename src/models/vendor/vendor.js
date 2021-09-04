"use strict";

const io =require('socket.io-client')
const host= 'http://localhost:3000/caps'
const connectcapSpace=io.connect(host)
const faker = require("faker");

connectcapSpace.on("delivered",(payload)=>{
  console.log(`VENDOR: Thank you for delivering  ${payload.orderId}`);
  
})





setInterval(()=>{

    let order={
        store:"Ghaidaa",
        orderId:faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.streetAddress(),
       
    }
    connectcapSpace.emit('pickup',order)
    
    

},5000)

connectcapSpace.on('orderinQueue',ordersQueue)
function ordersQueue(payload){
  console.log(`VENDOR: Order in Queue :`, payload.orderId);

}