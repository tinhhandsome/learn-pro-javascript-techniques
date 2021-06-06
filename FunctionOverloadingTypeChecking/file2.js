// Listing 2-6. Displaying an Error Message and a Default Message
function displayError(msg) {
  // Check and make sure that msg is not undefined
  if (typeof msg == "undefined") {
    // If it is, set a default message
    msg = "An error occurred.";
  }
  // Display the message
  alert(msg);
}
