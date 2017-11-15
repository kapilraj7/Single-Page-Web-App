// Code goes here
var app = angular.module("myApp", ['ngRoute']);


var MainController = function($scope) {
  $scope.message = "This is Home Page";
};

var AboutController = function($scope) {
  $scope.message = "This is About Page";
};

var ContactController = function($scope) {
  $scope.message = "This is Contact Page";
};

var RouteApplication = function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  // route for the home page
  .when('/', {
      templateUrl : 'home.html',
      controller : 'mainController'
  })
  // route for the about page
  .when('/about', {
      templateUrl : 'about.html',
      controller : 'aboutController'
  })
  // route for the contact page
  .when('/contact', {
      templateUrl : 'contact.html',
      controller : 'contactController'
  });
};

app.controller("mainController", MainController);
app.controller("aboutController", AboutController);
app.controller("contactController", ContactController);
// configure routes
app.config(RouteApplication);