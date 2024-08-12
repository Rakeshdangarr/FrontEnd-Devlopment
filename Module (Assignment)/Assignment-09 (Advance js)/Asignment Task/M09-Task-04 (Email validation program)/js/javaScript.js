const emailInput = document.getElementById("email");
const icon = document.getElementById("icon");
const emailBox = document.querySelector(".email-box");

emailInput.addEventListener("input", () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value.match(emailPattern)) {
    emailBox.classList.add("success");
    emailBox.classList.remove("error");
    icon.classList.add("fa-check-circle");
    icon.classList.remove("fa-times-circle");
  } else {
    emailBox.classList.add("error");
    emailBox.classList.remove("success");
    icon.classList.add("fa-times-circle");
    icon.classList.remove("fa-check-circle");
  }
});