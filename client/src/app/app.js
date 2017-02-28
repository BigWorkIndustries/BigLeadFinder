(function () {
    'use strict';

    require('angular-material/angular-material.css');
    require('webpack-material-design-icons');

    window.jQuery = window.$ = require('jquery');


    require('angular');
    require('angular-cookies');
    require('angular-material');
    require('angular-aria');
    require('angular-animate');

    require('oclazyload');

    require('./layout/layout');
    require('./views/dashboard/dashboard');
    require('./views/sign-in/sign-in');

    require('./services/app.services');

    require('./app.scss');

    var MODULE_NAME = 'app';

    angular.module(MODULE_NAME, [
        'ngCookies',
        // Vendor Modules
        'ngMaterial',
        'ngAria',
        'ngAnimate',
        'oc.lazyLoad',
        // App Modules
        'app.layout',
        'app.views.sign-in',
        'app.views.dashboard',
        // App Services
        'app.services'
    ]).run(Run).config(Config).config(Theme)

    /* @ngInject */
    function Run($rootScope,$ocLazyLoad,$state,$cookies,$timeout,AppServices){

        //$rootScope.showActivity = true;

        var authenticated = $cookies.get('authenticated');

        if (!authenticated) {
            $rootScope.authenticated = false;
        } else {
            $rootScope.authenticated = true;
        }

        $rootScope.$watch('authenticated',function(newValue,oldValue){
            if ($rootScope.authenticated) {
                $cookies.put('authenticated',true);
            } else {
                $cookies.put('authenticated',false);

                $timeout(function(){
                    $state.go('public.sign-in');
                });
            }
        });

        $rootScope.$evalAsync(function(){

            require.ensure([],function(){

                //require('./views/skus/skus');
                //$ocLazyLoad.load({name:'app.views.skus'});


            });
        });






    }

    /* @ngInject */
    function Config($compileProvider) {



    }

    function Theme($mdThemingProvider) {

        $mdThemingProvider.theme('default');


    }


    module.exports = MODULE_NAME;

})();