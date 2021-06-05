// Listing 8-9. Functions for Performing Form Validation and Triggering the Display of Error
// Messages
// A function for validating all fields within a form.
// The form argument should be a reference to a form element
// The load argument should be a boolean referring to the fact that
// the validation function is being run on page load, versus dynamically
function validateForm(form, load) {
  var valid = true;
  // Go through all the field elements in form
  // form.elements is an array of all fields in a form
  for (var i = 0; i < form.elements.length; i++) {
    // Hide any error messages, if they're being shown
    hideErrors(form.elements[i]);
    // Check to see if the field contains valid contents, or not
    if (!validateField(form.elements[i], load)) valid = false;
  }
  // Return false if a field does not have valid contents
  // true if all fields are valid
  return valid;
}

// Validate a single field's contents
function validateField(elem, load) {
  var errors = [];
  // Go through all the possible validation techniques
  for (var name in errMsg) {
    // See if the field has the class specified by the error type
    var re = new RegExp("(^|\\s)" + name + "(\\s|$)");
    // Check to see if the element has the class and that it passes the
    // validation test
    if (re.test(elem.className) && !errMsg[name].test(elem, load))
      // If it fails the validation, add the error message to list
      errors.push(errMsg[name].msg);
  }
  // Show the error messages, if they exist
  if (errors.length) showErrors(elem, errors);
  // Return false if the field fails any of the validation routines
  return errors.length > 0;
}

// Listing 8-10. Functions for Showing and Hiding Validation Error Messages Against a Specific
// Form Field

// Hide any validation error messages that are currently shown
function hideErrors(elem) {
  // Find the next element after the current field
  var next = elem.nextSibling;
  // If the next element is a ul and has a class of errors
  if (next && next.nodeName == "UL" && next.className == "errors")
    // Remove it (which is our means of 'hiding')
    elem.parenttNode.removeChild(next);
}

// Show a set of errors messages for a specific field within a form
function showErrors(elem, errors) {
  // Find the next element after the field
  var next = elem.nextSibling;
  // If the field isn't one of our special error-holders.
  if (next && (next.nodeName != "UL" || next.className != "errors")) {
    // We need to make one instead
    next = document.createElement("ul");
    next.className = "errors";
    // and then insert into the correct place in the DOM
    elem.paretNode.insertBefore(next, elem.nextSibling);
  }
  // Now that we have a reference to the error holder UL
  // We then loop through all the error messages
  for (var i = 0; i < errors.length; i++) {
    // Create a new li wrapper for each
    var li = document.createElement("li");
    li.innerHTML = errors[i];
    // and insert it into the DOM
    next.appendChild(li);
  }
}
