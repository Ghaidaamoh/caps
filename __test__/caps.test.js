"use strict";
const{ pickup,    intransit,    delivered }  = require("../caps");
const { describe, beforeEach, afterEach } = require('@jest/globals')
require("../src/models/driver");
require("../src/models/vendor");
const event = require('../events')

describe('test events caps', () => {
    let mockVar;
    let eventSkip;
    beforeEach(() => {
        mockVar = jest.spyOn(console, 'log').mockImplementation();
        eventSkip = jest.spyOn(event, 'emit').mockImplementation();
    });
    afterEach(() => {
        mockVar.mockRestore();
        eventSkip.mockRestore();
    });
    it('Should test pickup fun', () => {
      pickup();
        expect(mockVar).toHaveBeenCalled();
    });
    it('Should test intransit fun', () => {
      intransit();
        expect(mockVar).toHaveBeenCalled();
    });
    it('Should test delivered fun', () => {
        delivered();
        expect(mockVar).toHaveBeenCalled();
    });
})