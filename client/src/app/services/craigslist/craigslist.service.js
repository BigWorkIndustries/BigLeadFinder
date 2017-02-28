/**
 * Created by vincilbishop on 1/21/16.
 */
(function () {
    'use strict';

    require('./skus/skus.service');

    var MODULE_NAME = 'ls.craisglist.service';

    angular.module(MODULE_NAME, [
        'api.skus'
    ]).service('lfCraigslist', Service);

    /** @ngInject */
    function Service(SkusService,$log) {

        this.skus = SkusService;
    };

    module.exports = MODULE_NAME;

}());
