"use strict";

require("./src/models/driver");
require("./src/models/vendor");
const event = require("./events");

function pickup(payload){
  console.log("Event ", {
    event: "pickup",
    time: new Date().toISOString(),
    payload: payload,
  })


  // event.emit("ready-Pickup", payload);
}

function intransit(payload){
  console.log("Event ", {
    event: "in-transit",
    time: new Date().toISOString(),
    payload: payload,
  })


event.emit("in-Transit", payload);
}

function delivered(payload){
  console.log("Event ", {
    event: "delivered",
    time: new Date().toISOString(),
    payload: payload,
  })
  event.emit("finished", payload);
}


event.on("pickup", pickup) 
event.on("in-transit",intransit)
event.on("delivered",delivered )
module.exports = {event,
  pickup,
  intransit,
  delivered
}

