(function () {
    'use strict';

    require('angular-material/angular-material.css');
    require('webpack-material-design-icons');

    window.$ = window.jQuery = require('jquery');
    window._ = require('underscore');

    require('angular');
    require('angular-material');
    require('angular-aria');
    require('angular-animate');

    require('angular-electron');

    require('./layout/layout');
    require('./views/dashboard/dashboard');
    require('./views/cities/cities');
    require('./views/sign-in/sign-in');
    require('./views/posts/posts');
    require('./views/searches/searches');
    require('./views/responses/responses');
    require('./views/settings/settings');

    require('./services/app.services');

    require('./app.scss');

    var MODULE_NAME = 'app';

    angular.module(MODULE_NAME, [
        // Vendor Modules
        'ngMaterial',
        'angular-electron',
        //'ngAria',
        //'ngAnimate',
        // App Modules
        'app.layout',
        'app.views.sign-in',
        'app.views.dashboard',
        'app.views.cities',
        'app.views.posts',
        'app.views.searches',
        'app.views.responses',
        'app.views.settings',
        // App Services,
        'app.services'
    ]).constant('$',
        window.$
    ).constant('_',
        window._
    ).run(Run).config(Config).config(Theme)

    /* @ngInject */
    function Run($rootScope,$log,process,AppServices){

        $log.debug('Node v' + process.versions.node);
        $log.debug('Chrome v' + process.versions.chrome);
        $log.debug('Electron v' + process.versions.electron);

        AppServices.seed();
    }

    /* @ngInject */
    function Config($qProvider,$urlRouterProvider) {


        $qProvider.errorOnUnhandledRejections(false);
        $urlRouterProvider.otherwise('/searches');
    }

    /* @ngInject */
    function Theme($mdThemingProvider) {

        $mdThemingProvider.theme('default');
    }

    module.exports = MODULE_NAME;

})();