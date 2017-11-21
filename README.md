# Single-Page-Web-App
Created Single Page Application that uses Angularjs

A single-page application is an app that works inside a browser and does not require page reloading during use.

Here in this app, 3 page has been added 1)Home 2)About 3)Contact

with the help of Angular functionality Routing, it's possible to make application a SPA.

-> index.html

Added the angular module and controller to the HTML so that Angular knows how to bootstrap the application.
using ng-view directive that will load the template of different route in main layout file.

-> Contact.html
Created Form with Angular validation and Enabling Submit button once all required fields are filled.
Added bootstrap styling with html tags. 
Added data binding between view and controller. ng-click function on button.

-> Home.html
Created a table and fetching data from home controller Array into the table in tabular format using ng-repeat.
Added index for per row in a table.

-> script.js

Created angular module and controller. Add scope object and its property message to bind data between 
view and controller
using $routeProvider in Angular to handle all the routing.

Note: you must add the ngRoute as a dependency in the application module.

templateUrl is the route for each page.
you can also define controller for each "view".so that you can add additional messages in your page.

Created custom Service and add that service dependency in other controllers.
Controller for contact page , created an Array and pushing form data into an Array.
Setting that stored data in an Array into the Service.

On Home page controller, getting the stored data from service and storing that into an another Array.
**************************************
Updating App with CSS style using BootStrap and Font Awesome framework.
Added Bootstrap and Font Awesome classes in HTML tags.




