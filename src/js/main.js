import { setError, validateInputCheckBox, validateInputRadio, validateInputText } from './errorHandler';
import { validateEmail } from './utils';
import showToast from './toast';

const form = document.getElementById('form');
const toastElement = document.getElementById('toast');

const validateForm = () => {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const checkConsent = document.getElementById('checkConsent');
  const queryTypeContainer = document.getElementById('queryType');
  const queryType = document.querySelector('input[name="queryType"]:checked');

  const isFirstNameValid = validateInputText(firstName, 'This field is required');
  const isLastNameValid = validateInputText(lastName, 'This field is required');
  
  const validateInputEmail = () => {
    if (!email.value) {
      setError(email, 'This field is required');
      return false;
    } else {
      if (!validateEmail(email.value)) {
        setError(email, 'Please enter a valid email address');
        return false;
      } else {
        setError(email, null);
        return true;
      }
    }
  }

  const isEmailValid = validateInputEmail();
  const isMessageValid = validateInputText(message, 'This field is required');
  const isQueryTypeValid = validateInputRadio(queryType, queryTypeContainer, 'Please select a query type');
  const isCheckConsentValid = validateInputCheckBox(checkConsent, 'To submit this form, please consent to being contacted');

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isQueryTypeValid &&
    isMessageValid &&
    isCheckConsentValid
  ); 
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const isFormValid = validateForm();

  if (isFormValid) {
    form.reset()
    showToast(toastElement);

    return;
  } else {
    form.querySelector('[aria-invalid="true"]')?.focus();

    return;
  }
});

