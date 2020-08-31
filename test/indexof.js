"use strict";

var expect = require("chai").expect;
require("../index.js");

describe("Buffer#indexOf", function () {

    it("Buffer as value", function () {
        var buffer = Buffer.from("ABC");

        expect(buffer.indexOf(Buffer.from("ABC"))).to.be.equal(0);
        expect(buffer.indexOf(Buffer.from("AB"))).to.be.equal(0);
        expect(buffer.indexOf(Buffer.from("BC"))).to.be.equal(1);
        expect(buffer.indexOf(Buffer.from("C"))).to.be.equal(2);
        expect(buffer.indexOf(Buffer.from("CC"))).to.be.equal(-1);
        expect(buffer.indexOf(Buffer.from("CA"))).to.be.equal(-1);

        expect(buffer.indexOf(Buffer.from("ABC"), 1)).to.be.equal(-1);
        expect(buffer.indexOf(Buffer.from("AB"), 1)).to.be.equal(-1);
        expect(buffer.indexOf(Buffer.from("BC"), 1)).to.be.equal(1);
        expect(buffer.indexOf(Buffer.from("C"), 1)).to.be.equal(2);
        expect(buffer.indexOf(Buffer.from("CC"), 1)).to.be.equal(-1);
        expect(buffer.indexOf(Buffer.from("CA"), 1)).to.be.equal(-1);
    });

    it("String as value", function () {
        var buffer = Buffer.from("ABC");

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
        var buffer = Buffer.from([ 1, 2, 3 ]);

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

describe("Buffer#lastIndexOf", function () {

    it("Buffer as value", function () {
        var buffer = Buffer.from("ABCABC");

        expect(buffer.lastIndexOf(Buffer.from("ABC"))).to.be.equal(3);
        expect(buffer.lastIndexOf(Buffer.from("AB"))).to.be.equal(3);
        expect(buffer.lastIndexOf(Buffer.from("BC"))).to.be.equal(4);
        expect(buffer.lastIndexOf(Buffer.from("C"))).to.be.equal(5);
        expect(buffer.lastIndexOf(Buffer.from("CC"))).to.be.equal(-1);
        expect(buffer.lastIndexOf(Buffer.from("CA"))).to.be.equal(2);

        expect(buffer.lastIndexOf(Buffer.from("ABC"), 1)).to.be.equal(0);
        expect(buffer.lastIndexOf(Buffer.from("AB"), 1)).to.be.equal(0);
        expect(buffer.lastIndexOf(Buffer.from("BC"), 1)).to.be.equal(1);
        expect(buffer.lastIndexOf(Buffer.from("C"), 1)).to.be.equal(-1);
        expect(buffer.lastIndexOf(Buffer.from("CC"), 1)).to.be.equal(-1);
        expect(buffer.lastIndexOf(Buffer.from("CA"), 1)).to.be.equal(-1);
    });

    it("String as value", function () {
        var buffer = Buffer.from("ABCABC");

        expect(buffer.lastIndexOf("ABC")).to.be.equal(3);
        expect(buffer.lastIndexOf("AB")).to.be.equal(3);
        expect(buffer.lastIndexOf("BC")).to.be.equal(4);
        expect(buffer.lastIndexOf("C")).to.be.equal(5);
        expect(buffer.lastIndexOf("CC")).to.be.equal(-1);
        expect(buffer.lastIndexOf("CA")).to.be.equal(2);

        expect(buffer.lastIndexOf("ABC", 1)).to.be.equal(0);
        expect(buffer.lastIndexOf("AB", 1)).to.be.equal(0);
        expect(buffer.lastIndexOf("BC", 1)).to.be.equal(1);
        expect(buffer.lastIndexOf("C", 1)).to.be.equal(-1);
        expect(buffer.lastIndexOf("CC", 1)).to.be.equal(-1);
        expect(buffer.lastIndexOf("CA", 1)).to.be.equal(-1);

        // make sure it works predictable
        buffer = buffer.toString();

        expect(buffer.lastIndexOf("ABC")).to.be.equal(3);
        expect(buffer.lastIndexOf("AB")).to.be.equal(3);
        expect(buffer.lastIndexOf("BC")).to.be.equal(4);
        expect(buffer.lastIndexOf("C")).to.be.equal(5);
        expect(buffer.lastIndexOf("CC")).to.be.equal(-1);
        expect(buffer.lastIndexOf("CA")).to.be.equal(2);

        expect(buffer.lastIndexOf("ABC", 1)).to.be.equal(0);
        expect(buffer.lastIndexOf("AB", 1)).to.be.equal(0);
        expect(buffer.lastIndexOf("BC", 1)).to.be.equal(1);
        expect(buffer.lastIndexOf("C", 1)).to.be.equal(-1);
        expect(buffer.lastIndexOf("CC", 1)).to.be.equal(-1);
        expect(buffer.lastIndexOf("CA", 1)).to.be.equal(-1);

    });

    it("Number as value", function () {
        var buffer = Buffer.from([ 1, 2, 3, 1, 2, 3]);

        expect(buffer.lastIndexOf(1)).to.be.equal(3);
        expect(buffer.lastIndexOf(2)).to.be.equal(4);
        expect(buffer.lastIndexOf(3)).to.be.equal(5);
        expect(buffer.lastIndexOf(4)).to.be.equal(-1);

        expect(buffer.lastIndexOf(1, 1)).to.be.equal(0);
        expect(buffer.lastIndexOf(2, 1)).to.be.equal(1);
        expect(buffer.lastIndexOf(3, 1)).to.be.equal(-1);
        expect(buffer.lastIndexOf(4, 1)).to.be.equal(-1);
    });
});
