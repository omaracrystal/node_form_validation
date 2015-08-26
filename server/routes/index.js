var express = require('express');
var router = express.Router();



////////////////////////////* PUPPY SECTION *///////////////////////////////

/////////////////////GLOBAL VARIABLES////////////////////
//create puppy array to capture input data to print in console of terminal
var puppyArray = [];


/////////////////////GET  ROUTES////////////////////////
// route handler for handling a GET request to '/'
router.get('/', function(req, res, next) {
  //sends a response to the user in the form of a template called index.html
  res.render('index');
});


/////////////////////POST ROUTES///////////////////////
//route handler for handling a POST request to '/submit
//posting to server and /submit is the end point
router.post('/submit', function(req, res, next) {
  //8th step from todo.md
  var puppyInputName = req.body.puppyName
  var puppyInputID = req.body.puppyID
  var errors = puppyValidationCheck(puppyInputName, puppyInputID)

    //test for errors
    if(errors.length > 0) {
      res.render('index', {
        errors: errors
      })
    } else {
      //6th step from todo.md
      puppyArray.push({
        name: puppyInputName,
        id: puppyInputID
    })
      //grabs view template and sends a response to user in the form of dog.html
      res.render('dog', {
        puppies: puppyArray,
        success: "Yay! you just added a dog!"
      })
    }

  //get data from form always req.body .puppyName (name attr from index.html)
  console.log(req.body.puppyName)
  console.log(req.body.puppyID)

  //console.log(req.body)- in terminal> to test1

  console.log(puppyArray);
  //res.send("yo dawg"); < to test1

});



///////////////////////Utilities////////////////////////

//right under router
function puppyValidationCheck(puppyName, puppyID) {
  //error array to show all errors at once
  var errorArray = [];
  //.trim white space
  var puppyNameTrimmed = puppyName.trim();
  var puppyIDTrimmed = puppyID.trim();
  //puppy name validations
  if(puppyNameTrimmed ==='') {
    errorArray.push("Name cannot be blank.");
  }

  //puppy ID validations
  if(puppyIDTrimmed === '') {
    errorArray.push('ID cannot be blank.');
  } else if (puppyIDTrimmed.length < 3) {
    errorArray.push('An ID must be at least 3 characters long.');
  }

  return errorArray;

}



////////////////////////////* PEOPLE SECTION *///////////////////////////////

/////////////////////GLOBAL VARIABLES////////////////////
var peopleArray = [];


/////////////////////GET  ROUTES////////////////////////
// route handler for handling a GET request to '/'
router.get('/people', function(req, res, next) {
  //sends a response to the user in the form of a template called index.html
  res.render('index_people');
});


/////////////////////POST ROUTES///////////////////////
//route handler for handling a POST request to '/submit
//posting to server and /submit is the end point
router.post('/submit_people', function(req, res, next) {
  //8th step from todo.md
  var personInputName = req.body.personName
  var personInputID = req.body.personID
  var errors = personValidationCheck(personInputName, personInputID)

    //test for errors
    if(errors.length > 0) {
      res.render('index', {
        errors: errors
      })
    } else {
      //6th step from todo.md
      peopleArray.push({
        name: personInputName,
        id: personInputID
    })
      //grabs view template and sends a response to user in the form of dog.html
      res.render('people', {
        people: peopleArray,
        success: "Yay! you just added a person!"
      })
    }

  //get data from form always req.body .personName (name attr from index.html)
  console.log(req.body.personName)
  console.log(req.body.personID)

  //console.log(req.body)- in terminal> to test1

  console.log(peopleArray);
  //res.send("yo person!"); < to test1

});



///////////////////////Utilities////////////////////////

//right under router
function personValidationCheck(personName, personID) {
  //error array to show all errors at once
  var errorArray = [];
  //.trim white space
  var personNameTrimmed = personName.trim();
  var personIDTrimmed = personID.trim();
  //person name validations
  if(personNameTrimmed ==='') {
    errorArray.push("Name cannot be blank.");
  }

  //person ID validations
  if(personIDTrimmed === '') {
    errorArray.push('ID cannot be blank.');
  } else if (personIDTrimmed.length < 3) {
    errorArray.push('An ID must be at least 3 characters long.');
  }

  return errorArray;

}


module.exports = router;

