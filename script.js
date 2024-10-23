// Smooth Scrolling for Navigation Links
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

// Form Validation for the Contact Form
$(document).ready(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Form submitted successfully!");
      // You can add code here to send the form data to a server if needed
    }
  });
});

// Tooltips for Interactive Elements
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
