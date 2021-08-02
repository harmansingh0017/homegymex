/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function openLoginModal() {
    showLoginForm();
    setTimeout(function () {
      $("#loginModal").modal("show");
    }, 230);
  }
  function showLoginForm() {
    $("#loginModal .registerBox").fadeOut("fast", function () {
      $(".loginBox").fadeIn("fast");
      $(".register-footer").fadeOut("fast", function () {
        $(".login-footer").fadeIn("fast");
      });

      $(".modal-title").html("Login with");
    });
    $(".error").removeClass("alert alert-danger").html("");
  }
  function showRegisterForm(){
$('.loginBox').fadeOut('fast',function(){
    $('.registerBox').fadeIn('fast');
    $('.login-footer').fadeOut('fast',function(){
        $('.register-footer').fadeIn('fast');
    });
    $('.modal-title').html('Register with');
}); 
$('.error').removeClass('alert alert-danger').html('');
   
}

$(function(){
  $("#nav-placeholder").load("nav.html");
});

$(function(){
  $("#login-placeholder").load("login.html");
});