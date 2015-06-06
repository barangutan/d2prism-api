
var assert = require("assert");
var expect = require('chai').expect;
var request = require('request');

var endpoints = require('../config/endpoints').endpoints;

describe('d2Prism API -', function() {
	this.timeout(10000); // set a 10 second max timeout to deal with client -> server distance

	before(function () {
        // nothing yet
    });
	
	describe('When we ping the API', function() {
		it('it should return a HTTP status of 200', function(done) {

			request(endpoints['PING'], function (err, res, body) {
				expect(res.statusCode).to.equal(200)
				done();
			});
			
		});
	});

	describe('When we request a random courier', function() {
		it('it should return one', function(done) {

			request(endpoints['RANDOM'], function (err, res, body) {
				expect(res.statusCode).to.equal(200);
				expect(JSON.parse(body).length).to.be.equal(1);
				done();
			});
			
		});
	});

	describe('When we request *all* couriers', function() {
		it('it should return more than 800', function(done) {

			request(endpoints['ALL_COURIERS'], function (err, res, body) {
				expect(res.statusCode).to.equal(200);
				expect(JSON.parse(body).length).to.be.above(800); // we know there are at least 870!
				done();
			});
			
		});
	});
});