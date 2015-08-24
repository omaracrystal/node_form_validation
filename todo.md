#Node Express Form Validations

Aim for routes and views
5 parts to routes> index.js
  1. var express = require('express');
     var router = express.Router();
  1. GLOBAL VARIABLES
  1. GET  ROUTES
  1. POST ROUTES
  1. Logic/ utilities


##Users can create puppies


1. Create form / grab from bootstrp
1. Update form
1. Add form action and method in index.html view
1. index.js
1. set up routes in index.js
1. test routes with
console.log(req.body)- (which will appear in terminal) and
console.log(puppyArray);
res.send("yo dawg");
1. create puppy array and pushing inputs into an object then into the puppy array within index.js folder (or utilities in the future)
test =
  //get data from form always req.body .puppyName (name attr from index.html)
  console.log(req.body.puppyName)
  console.log(req.body.puppyID)
1. create a template where the submissions will go


##Error Validation
1. go to index.html and create error variables and if statement

MESSAGE:
When a user goes to the site's homepage
And clicks "Add a Puppy"
And fills out the form
And clicks "Create Puppy"
Then they should see the created puppy on the puppies index page
And a success message should appear


