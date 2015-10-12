"use strict";

var expect = require("chai").expect;
require("../index.js");

describe("Buffer#indexOf", function () {

    it("Buffer as value", function () {
        var buffer = new Buffer("ABC");

        expect(buffer.indexOf(new Buffer("ABC"))).to.be.equal(0);
        expect(buffer.indexOf(new Buffer("AB"))).to.be.equal(0);
        expect(buffer.indexOf(new Buffer("BC"))).to.be.equal(1);
        expect(buffer.indexOf(new Buffer("C"))).to.be.equal(2);
        expect(buffer.indexOf(new Buffer("CC"))).to.be.equal(-1);
        expect(buffer.indexOf(new Buffer("CA"))).to.be.equal(-1);

        expect(buffer.indexOf(new Buffer("ABC"), 1)).to.be.equal(-1);
        expect(buffer.indexOf(new Buffer("AB"), 1)).to.be.equal(-1);
        expect(buffer.indexOf(new Buffer("BC"), 1)).to.be.equal(1);
        expect(buffer.indexOf(new Buffer("C"), 1)).to.be.equal(2);
        expect(buffer.indexOf(new Buffer("CC"), 1)).to.be.equal(-1);
        expect(buffer.indexOf(new Buffer("CA"), 1)).to.be.equal(-1);
    });

    it("String as value", function () {
        var buffer = new Buffer("ABC");

        expect(buffer.indexOf("ABC")).to.be.equal(0);
        expect(buffer.indexOf("AB")).to.be.equal(0);
        expect(buffer.indexOf("BC")).to.be.equal(1);
        expect(buffer.indexOf("C")).to.be.equal(2);
        expect(buffer.indexOf("CC")).to.be.equal(-1);
        expect(buffer.indexOf("CA")).to.be.equal(-1);

        expect(buffer.indexOf("ABC", 1)).to.be.equal(-1);
        expect(buffer.indexOf("AB", 1)).to.be.equal(-1);
        expect(buffer.indexOf("BC", 1)).to.be.equal(1);
        expect(buffer.indexOf("C", 1)).to.be.equal(2);
        expect(buffer.indexOf("CC", 1)).to.be.equal(-1);
        expect(buffer.indexOf("CA", 1)).to.be.equal(-1);
    });
    
    it("Number as value", function () {
        var buffer = new Buffer([ 1, 2, 3 ]);

        expect(buffer.indexOf(1)).to.be.equal(0);
        expect(buffer.indexOf(2)).to.be.equal(1);
        expect(buffer.indexOf(3)).to.be.equal(2);
        expect(buffer.indexOf(4)).to.be.equal(-1);

        expect(buffer.indexOf(1, 1)).to.be.equal(-1);
        expect(buffer.indexOf(2, 1)).to.be.equal(1);
        expect(buffer.indexOf(3, 1)).to.be.equal(2);
        expect(buffer.indexOf(4, 1)).to.be.equal(-1);
    });
});
