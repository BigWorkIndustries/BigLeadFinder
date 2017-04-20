/**
 * Created by vincilbishop on 1/21/16.
 */
(function () {
    'use strict';

    require('./cities/cities.service');
    require('./posts/posts.service');
    require('./searches/searches.service');
    require('./responses/responses.service');
    require('./settings/settings.service');

    var MODULE_NAME = 'api.services';

    angular.module(MODULE_NAME, [
        'api.cities',
        'api.posts',
        'api.searches',
        'api.responses',
        'api.settings'
    ]).service('ApiServices', Service);

    /** @ngInject */
    function Service($log,$q,CitiesService,PostsService,SearchesService,ResponsesService,SettingsService) {



        this.cities = CitiesService;
        this.posts = PostsService;
        this.searches = SearchesService;
        this.responses = ResponsesService;
        this.settings = SettingsService;
    };

    module.exports = MODULE_NAME;

}());
