
      $("button").click((e) => {
        e.preventDefault();

        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let email = document.getElementById("email");
        let number = document.getElementById("number");
        let dob = document.getElementById("dob");
        let cityName = document.getElementById("cityName");
        let pincode = document.getElementById("pincode");
        let stateName = document.getElementById("stateName");
        let quali = document.getElementById("quali");
        let pass = document.getElementById("pass");

        if (firstName.checkValidity()) {
          $("#firstName + .feedback").css("display", "inline");
          $("#firstName + .feedback").css("color", "green");
          $("#firstName + .feedback").text("valid Input");
        } else {
          $("#firstName + .feedback").css("display", "inline");
          $("#firstName + .feedback").css("color", "red");
          $("#firstName + .feedback").text("Please Enter your First name");
        }

        if (lastName.checkValidity()) {
          $("#lastName + .feedback").css("display", "inline");
          $("#lastName + .feedback").css("color", "green");
          $("#lastName + .feedback").text("valid Input");
        } else {
          $("#lastName + .feedback").css("display", "inline");
          $("#lastName + .feedback").css("color", "red");
          $("#lastName + .feedback").text("Please Enter your last name");
        }

        if (email.checkValidity()) {
          $("#email + .feedback").css("display", "inline");
          $("#email + .feedback").css("color", "green");
          $("#email + .feedback").text("valid Input");
        } else {
          $("#email + .feedback").css("display", "inline");
          $("#email + .feedback").css("color", "red");
          $("#email + .feedback").text("Please Enter your valid email");
        }

        if (number.checkValidity()) {
          $("#number + .feedback").css("display", "inline");
          $("#number + .feedback").css("color", "green");
          $("#number + .feedback").text("valid Input");
        } else {
          $("#number + .feedback").css("display", "inline");
          $("#number + .feedback").css("color", "red");
          $("#number + .feedback").text(
            "Please Enter your valid mobile number"
          );
        }

        if (address.checkValidity()) {
          $("#address + .feedback").css("display", "inline");
          $("#address + .feedback").css("color", "green");
          $("#address + .feedback").text("valid Input");
        } else {
          $("#address + .feedback").css("display", "inline");
          $("#address + .feedback").css("color", "red");
          $("#address + .feedback").text("Please Enter your proper address");
        }

        if (cityName.checkValidity()) {
          $("#cityName + .feedback").css("display", "inline");
          $("#cityName + .feedback").css("color", "green");
          $("#cityName + .feedback").text("valid Input");
        } else {
          $("#cityName + .feedback").css("display", "inline");
          $("#cityName + .feedback").css("color", "red");
          $("#cityName + .feedback").text("Please Enter your city name");
        }

        if (pincode.checkValidity()) {
          $("#pincode + .feedback").css("display", "inline");
          $("#pincode + .feedback").css("color", "green");
          $("#pincode + .feedback").text("valid Input");
        } else {
          $("#pincode + .feedback").css("display", "inline");
          $("#pincode + .feedback").css("color", "red");
          $("#pincode + .feedback").text("Please Enter your Pincode");
        }

        if (stateName.checkValidity()) {
          $("#stateName + .feedback").css("display", "inline");
          $("#stateName + .feedback").css("color", "green");
          $("#stateName + .feedback").text("valid Input");
        } else {
          $("#stateName + .feedback").css("display", "inline");
          $("#stateName + .feedback").css("color", "red");
          $("#stateName + .feedback").text("Please Enter your State name");
        }

        if (quali.checkValidity()) {
          $("#quali + .feedback").css("display", "inline");
          $("#quali + .feedback").css("color", "green");
          $("#quali + .feedback").text("valid Input");
        } else {
          $("#quali + .feedback").css("display", "inline");
          $("#quali + .feedback").css("color", "red");
          $("#quali + .feedback").text("Please Enter your Qualification");
        }

        if (pass.checkValidity()) {
          $("#pass + .feedback").css("display", "inline");
          $("#pass + .feedback").css("color", "green");
          $("#pass + .feedback").text("valid Input");
        } else {
          $("#pass + .feedback").css("display", "inline");
          $("#pass + .feedback").css("color", "red");
          $("#pass + .feedback").text("Please Enter your valid Password");
        }
      });