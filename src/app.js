class App {
  constructor() {
    this.init();
  }

  init() {
    window.document.body.innerHTML = 'Hello Earth!';
  }
}

window.APP = new App();
