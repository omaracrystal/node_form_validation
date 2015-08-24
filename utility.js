function puppyValidationCheck(puppyName, puppyTag) {

  var errArray= [];
  var puppyNameTrimmed= puppyName.trim();
  var puppyTagTrimmed= puppyTag.trim();

  if(puppyNameTrimmed == '') {
    errorArray.push("Name cannot be blank");
  }

  if(puppyTagTrimmed =='') {
    errorArray.push('Tag cannot be blank ')
  }
}
