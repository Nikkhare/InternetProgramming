
checkCookie();
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);

    }
  }
  return "";
}
function checkCookie() {
  let user = getCookie("email");
  if (user != "") {
    $("#loginform").hide();
    $("#logged").show();
  } 
  else {
    $("#loginform").show();
    $("#logged").hide();

  }
}
$(document).on("submit", "#loginForm", function(e) {
  e.preventDefault();
  var email = e.target.email.value;
  var password = e.target.password.value;
  setCookie("email", email, 50000);
  checkCookie();

});

$(document).on("click", "#logout", function() {
  setCookie("email", "", -50000);
  checkCookie();
});