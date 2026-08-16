const inputError = (element, elementContainer) => {
  const spanErrorMessage = elementContainer.querySelector('.error-message');

  if (element.value === '') {
    elementContainer.classList.add('invalid-field');
    spanErrorMessage.style.display = 'block';

    return false;
  } else {
    spanErrorMessage.style.display = 'none';
    elementContainer.classList.remove('invalid-field');

    return true;
  }
}

const radioError = (element, elementContainer) => {
  const spanErrorMessage = elementContainer.querySelector('.error-message');
  
  if (!element) {
    elementContainer.classList.add('invalid-field');
    spanErrorMessage.style.display = 'block';

    return false;
  } else {
    spanErrorMessage.style.display = 'none';
    elementContainer.classList.remove('invalid-field');

    return true;
  }
}

const checkboxError = (element, elementContainer) => {
  const spanErrorMessage = elementContainer.querySelector('.error-message');
  
  if (!element) {
    elementContainer.classList.add('invalid-field');
    spanErrorMessage.style.display = 'block';

    return false;
  } else {
    spanErrorMessage.style.display = 'none';
    elementContainer.classList.remove('invalid-field');

    return true;
  }
}

export {
  inputError,
  radioError,
  checkboxError
}