/**
 * Created by vincilbishop on 1/21/16.
 */
(function () {
    'use strict';

    var MODULE_NAME = 'lf.cities.service';

    angular.module(MODULE_NAME,[
    ]).service('lf_CitiesService', Service);

    /** @ngInject */
    function Service($rootScope) {

        var model = {};

        model.getDefaultSkus = function (completion) {


        };

        return model;
    };

    module.exports = MODULE_NAME;

}());
