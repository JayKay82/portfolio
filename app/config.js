'use strict';

angular.module('jaykayPortfolio')
  .config(['$routeProvider', function($routeProvider){

    // setup client-side routes
    var router = $routeProvider;
    router.when('/', { templateUrl: 'views/home' })
          .when('/about', { templateUrl: 'views/about' })
          .when('/work', { templateUrl: 'views/case-studies' })
          .when('/contact', {templateUrl: 'views/contact' })
          .when('/blog', { templateUrl: 'views/blog-landing' });

  }]);
