/**
 * Created by vincilbishop on 1/21/16.
 */
(function () {
    'use strict';

    var MODULE_NAME = 'lf.cities.service';

    angular.module(MODULE_NAME,[
    ]).service('lfCitiesService', Service);

    /** @ngInject */
    function Service($rootScope,$log) {

        var service = {};

        service.updateCities = function (completion) {

            $log.debug('lfCitiesService.updateCities');

        };

        return service;
    };

    module.exports = MODULE_NAME;

}());
