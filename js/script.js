const $form = document.querySelector("form");
const $inputEmail = document.querySelector("#email");
const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});

const validateEmail = () => {
  if (emailReg.test($inputEmail.value)) {
    const $err = document.querySelector('p.error')
    $err.remove();
  } else {
    showError();
  }
};

const showError = () => {
  const $errorMessage = document.createElement("p");
  $errorMessage.textContent = `Please enter a vallid email address`;
  $errorMessage.classList.add(
    "text-red-500",
    "font-raleway",
    "font-semibold",
    "px-7",
    "lg:text-left",
    "error"
  );
  
  const errors = document.querySelectorAll('.error');
  
  if(errors.length === 0){
    $form.insertAdjacentElement("afterend", $errorMessage);
  }

};
