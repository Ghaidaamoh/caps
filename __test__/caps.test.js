"use strict";
const event = require("../caps");
let consSpy;
require("../src/models/driver");
require("../src/models/vendor");

let order = {
  store: "1-206-flowers",
  orderID: "e3669048-7313-427b-b6cc-74010ca1f8f0",
  customer: "Jamal Braun",
  address: "Schmittfort, LA",
};

describe("events handler tests", () => {
  beforeEach(() => {
    jest.runAllTimers();
    consSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
   
    consSpy.mockRestore();
  });

  it("pick up handler test", () => {
    event.emit("pickup", order);
    expect(consSpy).toHaveBeenCalled();
  });
  it("delivered handler test", () => {
    event.emit("delivered", order);
    expect(consSpy).toHaveBeenCalled();
  });
  it("in-transit handler test", () => {
    event.emit("in-transit", order);
    expect(consSpy).toHaveBeenCalled();
  });
});