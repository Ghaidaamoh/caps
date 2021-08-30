"use strict";
const event = require("../../events");

event.on("ready-Pickup", (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    event.emit("in-transit", payload);
  }, 1000);
});


event.on("in-Transit", (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: delivered  up ${payload.orderID}`);
    event.emit("pre-delivery", payload);
  }, 3000);
});
module.exports = event;