import Toastify from 'toastify-js';

const container = document.createElement('div');
const icon = document.createElement('img');
const titleContainer = document.createElement('div');
const title = document.createElement('h2');
const text = document.createElement('p');

container.classList.add('toast-container');

const imgPath = new URL('../assets/images/icon-success-check.svg', import.meta.url);
icon.src = imgPath.href;
icon.alt = '';

title.innerText = 'Message Sent!';
title.classList.add('toast-title');

text.innerText = 'Thanks for completing the form. We\'ll be in touch soon!';
text.classList.add('toast-text');

titleContainer.appendChild(icon);
titleContainer.appendChild(title);
container.appendChild(titleContainer);
container.appendChild(text);

const toast = () => {
  Toastify({
    node: container,
    duration: 5000,
    close: false,
    gravity: 'top',
    position: 'center',
    stopOnFocus: true,
    className: 'toast-position-mobile',
    style: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center'
    }
  }).showToast();

  return Toastify;
}

export default toast ;