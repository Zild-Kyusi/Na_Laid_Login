function showErrorMessage() {
    var errorMessage = document.getElementById("NavError");
    errorMessage.innerHTML = "Please login first to browse";
    errorMessage.style.display = "block";
  }

function validateForm(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var requiredU = document.getElementById("requiredU");
    var requiredPas = document.getElementById("requiredPas");
    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");
  
    if (username == "") {
      usernameError.innerHTML = "Please enter your username.";
      console.log("Login error.");
      requiredU.innerHTML = " *";
    } else {
      usernameError.innerHTML = "";
    }
  
    if (password == "") {
      passwordError.innerHTML = "Please enter your password.";
      console.log("Login error.");
      requiredPas.innerHTML = " *";
    } else {
      passwordError.innerHTML = "";
    }
  
    if (username != "" && password != "") {
      window.location.reload();
    } else if (username == "" && password == "") {
      usernameError.innerHTML = "Please enter your username and password.";
      passwordError.innerHTML = "";
      console.log("Login error.");
      required.innerHTML = " *";
    }
  }
  