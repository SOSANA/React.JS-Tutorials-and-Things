const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  // System is a global variable inside of js, import is a function that
  // is apart of the es6 spec. Only imports a single module of code and
  // async call that returns a promise
  System.import('./image_viewer').then(module => { // applying code splitting
    // console.log(module);
    module.default();
  });
};

document.body.appendChild(button);
