// Listing 8-8. A Standard Set of Rules and Descriptive Error Messages for Building a Basic
// Validation Engine
var errMsg = {
  // Checks for when a specified field is required
  required: {
    msg: "This field is required.",
    test: function (obj, load) {
      // Make sure that there is no text was entered in the field and that
      // we aren't checking on page load (showing 'field required' messages
      // would be annoying on page load)
      return obj.value.length > 0 || load || obj.value == obj.defaultValue;
    },
  },
  // Makes sure that the field s a valid email address
  email: {
    msg: "Not a valid email address.",
    test: function (obj) {
      // Make sure that something was entered and that it looks like
      // an email address
      return (
        !obj.value ||
        /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i.test(obj.value)
      );
    },
  },
  // Makes sure the field is a phone number and
  // auto-formats the number if it is one
  phone: {
    msg: "Not a valid phone number.",
    test: function (obj) {
      // Check to see if we have something that looks like
      // a valid phone number
      var m = /(\d{3}).*(\d{3}).*(\d{4})/.exec(obj.value);
      // If it is, seemingly, valid - force it into the specific
      // format that we desire: (123) 456-7890
      if (m) obj.value = "(" + m[1] + ") " + m[2] + "-" + m[3];
      return !obj.value || m;
    },
  },
  // Makes sure that the field is a valid MM/DD/YYYY date
  date: {
    msg: "Not a valid date.",
    test: function (obj) {
      // Make sure that something is entered, and that it
      // looks like a valid MM/DD/YYYY date
      return !obj.value || /^\d{2}\/\d{2}\/\d{2,4}$/.test(obj.value);
    },
  },
  // Makes sure that the field is a valid URL
  url: {
    msg: "Not a valid URL.",
    test: function (obj) {
      // Make sure that some text was entered, and that it's
      // not the default http:// text
      return (
        !obj.value ||
        obj.value == "http://" ||
        // Make sure that it looks like a valid URL
        /^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/.test(obj.value)
      );
    },
  },
};

// Using this new rule set data structure you can now write a common, consistent means of
// form validation and a display of error messages, which I discuss in the next section.
// S??? d???ng c??c ch???c n??ng x??c th???c kh??c nhau t??? ph???n tr?????c, b??y gi??? b???n c?? th??? t???o
// c???u tr??c chung ????? x??? l?? t???t c??? c??c k??? thu???t x??c nh???n kh??c nhau. ??i???u quan tr???ng l??
// t???t c??? c??c b??i ki???m tra ???????c x??? l?? gi???ng nhau v???i c??c t??n th??ng th?????ng v?? c??c th??ng b??o l???i ng??? ngh??a. C??c
// c???u tr??c d??? li???u t???p quy t???c ho??n ch???nh c?? th??? ???????c t??m th???y trong Li???t k?? 8-8