var module = require('./app');

describe('app', function() {

    beforeEach(function() {
        angular.mock.module(module);
    });

    it("says hello", function() {
        expect('Hello world!').toEqual("Hello world!");
    });

    it("mocks the module", function() {
        expect(angular.module(module)).toBeObject();
    });
});