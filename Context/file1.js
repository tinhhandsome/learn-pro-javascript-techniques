// Listing 2-17. Examples of Using Functions Within Context and Then Switching Its Context to Another Variable
var obj = {
  yes: function () {
    // this == obj
    this.val = true;
  },
  no: function () {
    this.val = false;
  },
};
// We see that there is no val property in the 'obj' object
alert(obj.val == null);
// We run the yes function and it changes the val property
// associated with the 'obj' object
obj.yes();
alert(obj.val == true);
// However, we now point window.no to the obj.no method and run it
window.no = obj.no;
window.no();
// This results in the obj object staying the same (as the context was
// switched to the window object)
alert(obj.val == true);
// and window val property getting updated.
alert(window.val == false);

// Within JavaScript your code will always have some form on context (an object within which
//     it is operating). This is a common feature of other object-oriented languages too, but without
//     the extreme in which JavaScript takes it.
//     The way context works is through the this variable. The this variable will always refer to
//     the object that the code is currently inside of. Remember that global objects are actually properties of the window object. This means that even in a global context, the this variable will still
//     refer to an object. Context can be a powerful tool and is an essential one for object-oriented
//     code. Listing 2-17 shows some simple examples of context.
