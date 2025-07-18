globalThis.addEventListener('message', event => {
  globalThis.femPortMessage = event.ports[0];
});
console.log(111111);