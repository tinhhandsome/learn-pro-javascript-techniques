// Listing 8-14. Performing Form Validation Upon Page Load
addEvent(window, "load", function () {
  // Find all the forms on the page
  var forms = document.getElementsByTagName("form");
  // Go through all the forms on the page
  for (var i = 0; i < forms.length; i++) {
    // Validate each of the forms, being sure to set the 'load' argument to
    // true, which stops certain, unnecessary, errors from appearing
    validateForm(forms[i], true);
  }
});
// Validating forms on page load isn’t as necessary as the previous two techniques but is important to include if you wish to catch an important fringe case. If a user enters information into
// a form and reloads the browser window (or if user information is prepopulated into a form by
// the browser or the application itself), it is possible that errors can occur within this prepopulated information. This particular technique is designed to run a validation upon the form
// whenever the page loads, to validate the quality of data that’s already been entered into it.
// This gives the user the opportunity to deal with the errors immediately, rather than waiting
// for the final form submission check of the data.
// An example of the code required to enable page load form validation is shown in
// Listing 8-14.
