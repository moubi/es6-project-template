(function() {
  function App() {}

  window.App = App;
})();

class App {
  constructor() {
    this.init();
  }

  init() {
    document.body.innerHTML = 'Hello Earth!';
  }
}

window.APP = new App();
