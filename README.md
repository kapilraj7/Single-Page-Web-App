# Single-Page-Web-App
Created Single Page Application that uses Angularjs

A single-page application is an app that works inside a browser and does not require page reloading during use.

Here in this app, 3 page has been added 1)Home 2)About 3)Contact

with the help of Angular functionality Routing, it's possible to make application a SPA.

-> index.html

Added the angular module and controller to the HTML so that Angular knows how to bootstrap the application.
using ng-view directive that will load the template of different route in main layout file.

-> script.js

Created angular module and controller. Add scope object and its property message to bind data between 
view and controller
using $routeProvider in Angular to handle all the routing.

Note: you must add the ngRoute as a dependency in the application module.

templateUrl is the route for each page.

you can also define controller for each "view".so that you can add additional messages in your page.
**************************************
Updating App with CSS style using BootStrap and Font Awesome framework.
Added Bootstrap and Font Awesome classes in HTML tags.

--> Contact.html
Created Form with Angular validation and Enabaling Submit button once all required fields are filled.
added bootstrap styling with html tags. 


