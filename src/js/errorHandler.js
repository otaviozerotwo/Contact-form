const setError = (input, message) => {
  const error = document.getElementById(`${input.id}Error`);

  input.setAttribute('aria-invalid', String(Boolean(message)));

  error.textContent = message ?? '';
  error.hidden = !message;
}

const validateInputText = (input, message) => {
  if (!input.value) {
    setError(input, message);
    return false;
  } else {
    setError(input, null);
    return true;
  }
}

const validateInputRadio = (input, container, message) => {
  if (!input) {
    setError(container, message);
    return false;
  } else {
    setError(container, null);
    return true;
  }
}

const validateInputCheckBox = (input, message) => {
  if (!input.checked) {
    setError(input, message);
    return false;
  } else {
    setError(input, null);
    return true;
  }
}

export {
  setError,
  validateInputText,
  validateInputRadio,
  validateInputCheckBox
}