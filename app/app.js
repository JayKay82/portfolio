'use strict';

angular.module('jaykayPortfolio', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    var router = $routeProvider;

    // setup client-side routes
    router.when('/', { templateUrl: 'views/home' })
          .when('/about', { templateUrl: 'views/about' })
          .when('/work', { templateUrl: 'views/case-studies' })
          .when('/contact', {templateUrl: 'views/contact' })
          .when('/blog', { templateUrl: 'views/blog-landing' });
  }]);
