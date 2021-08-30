"use strict";

require("./src/models/driver");
require("./src/models/vendor");
const event = require("./events");

event.on("pickup", (payload) => {
  console.log("Event ", {
    event: "pickup",
    time: new Date().toISOString(),
    payload: payload,
  });
  event.emit("ready-Pickup", payload);
});

event.on("in-transit", (payload) => {
  console.log("Event ", {
    event: "in-transit",
    time: new Date().toISOString(),
    payload: payload,
  });
  event.emit("in-Transit", payload);
});

event.on("delivered", (payload) => {
  console.log("Event ", {
    event: "delivered",
    time: new Date().toISOString(),
    payload: payload,
  });
  event.emit("finished", payload);
});
module.exports = event;
