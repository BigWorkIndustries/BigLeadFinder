/**
 * Created by vincilbishop on 1/21/16.
 */
(function () {
    'use strict';

    var MODULE_NAME = 'api.settings';

    require('services/db/db.service');

    angular.module(MODULE_NAME, [
        'db.service'
    ]).config(Config).service('SettingsService', Service);

    /** @ngInject */
    function Config(remoteProvider) {
        remoteProvider.register('Browser', './Browser');
    }

    /** @ngInject */
    function Service($rootScope, $log, $q, Browser, DB, _, $) {

        var service = {};

        service.defaultSettings = function () {
            return {
                _id:"0",
                name:"default",
                email:{
                    smtp_server:"demo.smtp.com",
                    smtp_port:25,
                    smtp_username:"test@user.com",
                    smtp_password:"abc123"
                }
            };
        };

        service.find = function (selector) {
            return DB.findDocs('setting', selector);
        };

        service.remove = function (selector) {
            return DB.removeDocs('setting', selector);
        };

        service.create = function (query,categories) {

            var search = {};

            search.categories = categories;
            search.query = query;

            return DB.create('setting',search);
        }

        return service;
    };

    module.exports = MODULE_NAME;

}());