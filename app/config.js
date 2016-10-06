'use strict';

angular.module('jaykayPortfolio')
  .config(['$routeProvider', function($routeProvider){

    // setup client-side routes
    var router = $routeProvider;
    router.when('/', { templateUrl: './views/home.html' })
          .when('/about', { templateUrl: './views/about.html' })
          .when('/work', { templateUrl: './views/case-studies.html' })
          .when('/contact', {templateUrl: './views/contact.html' })
          .when('/blog', { templateUrl: './blog/blog.html' });

  }]);
