import { inputError, radioError, checkboxError, emailError } from './errorHandler';

const form = document.getElementById('form');
const inputGroupFirstName = document.getElementById('inputGroupFirstName');
const firstName = document.getElementById('firstName');
const inputGroupLastName = document.getElementById('inputGroupLastName');
const lastName = document.getElementById('lastName');
const inputGroupEmail = document.getElementById('inputGroupEmail');
const email = document.getElementById('email');
const inputGroupMessage = document.getElementById('inputGroupMessage');
const message = document.getElementById('message');
const inputGroupQueryType = document.getElementById('inputGroupQueryType');
const checkboxGroup = document.getElementById('checkboxGroup');

const validateForm = () => {
  const queryType = document.querySelector('input[name="queryType"]:checked');
  const checkConsent = document.getElementById('checkConsent').checked;

  const isFirstNameValid = inputError(firstName, inputGroupFirstName);
  const isLastNameValid = inputError(lastName, inputGroupLastName);
  const isEmailValid = emailError(email, inputGroupEmail);
  const isQueryTypeValid = radioError(queryType, inputGroupQueryType);
  const isMessageValid = inputError(message, inputGroupMessage);
  const isCheckConsentValid = checkboxError(checkConsent, checkboxGroup);

  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isQueryTypeValid &&
    isMessageValid &&
    isCheckConsentValid
  ) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const isFormValid = validateForm();

  isFormValid && form.reset();
});

