// Code goes here
var app = angular.module("myApp", ['ngRoute']);


var MainController = function($scope,myService) {
  $scope.message = "This is Home Page";
  //getting data from different controller using custom service
  $scope.objData = myService.get();
};

var AboutController = function($scope) {
  $scope.message = "The Customer will fill the contact form in contact page, " + "input all valid details and submit the form. The feedback " + "including all details will be sent to the Home page.";
};

var ContactController = function($scope, myService) {
  $scope.objArray = [];
  $scope.message = "This is Contact Page";
  //pushing form data into an array and setting that data in service object 
  $scope.FormDetails = function() {
    $scope.objArray.push({
      name: $scope.name,
      email: $scope.email,
      txtarea: $scope.txtarea
    });
    myService.set($scope.objArray);
  };
};

var RouteApplication = function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  // route for the home page
    .when('/', {
      templateUrl: 'home.html',
      controller: 'mainController'
    })
    // route for the about page
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'aboutController'
    })
    // route for the contact page
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'contactController'
    });
};

app.controller("mainController", MainController);
app.controller("aboutController", AboutController);
app.controller("contactController", ContactController);
// configure routes
app.config(RouteApplication);
// creating  service
app.factory('myService', function() {
  var savedData = {};

  function set(data) {
    savedData = data;
  }

  function get() {
    return savedData;
  }

  return {
    set: set,
    get: get
  }
});
