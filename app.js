function validityCheck() {
  var input_first = document.getElementById("first_input").value;
  var input_last = document.getElementById("last_input").value;
  var input_email = document.getElementById("Email_input").value;
  var input_password = document.getElementById("password_input").value;
  var input_contact = document.getElementById("contact_input").value;
  var input_cnic = document.getElementById("cnic_input").value;

  if (input_first == "") {
    document.getElementById("first").style.display = "block";
  } else if (input_last == "") {
    document.getElementById("last").style.display = "block";
  } else if ((input_email = "")) {
    document.getElementById("Email").style.display = "block";
  } else if (input_password == "") {
    document.getElementById("password").style.display = "block";
  } else if (input_contact == "") {
    document.getElementById("contact").style.display = "block";
  } else if (input_cnic == "") {
    document.getElementById("cnic").style.display = "block";
  } else {
    document.write(
      "<big>First Name: " + input_first,
      "<br>Last Name: " + input_last,
      "<br>Email" + input_email,
      "<br>Password: " + input_password,
      "<br>Contact: " + input_contact,
      "<br>CNIC: " + input_cnic
    );
  }
}
validityCheck()
