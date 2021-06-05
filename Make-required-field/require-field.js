// Listing 8-17. Adding Contextual Stars (*) and Help Messages to Required Form Field Labels 
// Using the jQuery JavaScript Library

// Find all input fields that have been marked as required
$("input.required")
// then locate the previous label
.prev("label")
// Change the cursor, over the label, to being more helpful
.css("cursor", "help")
// Make it so that when the user hovers their mouse over, a description
// of the * is explained
.title( errMsg.required )
// Finally, add a * at the end of the label, to signify 
// the field as being required
.append(" <span class='required'>*</span>");



// Marking Required Fields
// he second technique that you’re going to look at is that of marking required fields with 
// a visual cue. Marking required fields with a red star is a common technique that most web
// developers have adopted on their web sites. However, the additional markup necessary to
// include these stars is rather unsemantic and should be discouraged. Instead, this is a perfect
// opportunity to use JavaScript to add in these visual cues. An example of this technique is
// shown in Figure 8-4.
// One aspect of adding these cues to the required field labels is the addition of specific
// helper text to guide the user. Using the title attribute you could provide users with a message
// explaining exactly what the red star means (in case they are unfamiliar with it). All told, the
// implementation of this improvement is rather simple and is shown in Listing 8-17.