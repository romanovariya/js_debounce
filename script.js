'use strict';

const input = document.querySelector('input'),
    p = document.querySelector('p');

function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  };
}

const typeParagraph = () => {
    p.innerHTML = input.value;
};

input.addEventListener('input', debounce(typeParagraph, 300));
