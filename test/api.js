
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

	describe('When we request *all* couriers', function() {
		it('it should return more than 800', function(done) {

			request(endpoints['ALL_COURIERS'], function (err, res, body) {
				expect(res.statusCode).to.equal(200);
				expect(JSON.parse(body).length).to.be.above(800); // we know there are at least 870!
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

	describe('When we request a specific courier which exists', function() {
		it('it should return at least one', function(done) {

			request(endpoints['RGB'] + '180,122,157', function (err, res, body) {
				expect(res.statusCode).to.equal(200);
				expect(JSON.parse(body).length).to.be.above(0);
				done();
			});
			
		});
	});

	describe('When we request a specific courier which doesn\'t exist', function() {
		it('it should return a HTTP status of 404', function(done) {

			request(endpoints['RGB'] + '6,6,6', function (err, res, body) {
				expect(res.statusCode).to.equal(404); // Not found!
				done();
			});
			
		});
	});

	describe('When we request similar couriers for an existing courier', function() {
		it('it should return 8 of them', function(done) {

			request(endpoints['SIMILAR'] + '180,122,157', function (err, res, body) {
				expect(res.statusCode).to.equal(200);
				expect(JSON.parse(body).length).to.be.equal(8);
				done();
			});
			
		});
	});

	describe('When we request similar couriers for a non-existing courier', function() {
		it('it should still return 8 of them', function(done) {

			request(endpoints['SIMILAR'] + '6,6,6', function (err, res, body) {
				expect(res.statusCode).to.equal(200);
				expect(JSON.parse(body).length).to.be.equal(8);
				done();
			});
			
		});
	});
});