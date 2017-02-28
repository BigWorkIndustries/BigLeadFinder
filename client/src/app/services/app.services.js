(function () {
    'use strict';

    require('./api/api.services');

    var MODULE_NAME = 'app.services';

    angular.module(MODULE_NAME, [
        'api.services'
    ]).service('AppServices', Service);

    /* @ngInject */
    function Service(ApiServices,$log) {

        this.api = ApiServices;
    };

    module.exports = MODULE_NAME;

})();