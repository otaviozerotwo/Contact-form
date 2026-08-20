const showToast = (element) => {
  element.hidden = false;

  setTimeout(() => {
    element.hidden = true;
  }, 5000);
}

export default showToast;