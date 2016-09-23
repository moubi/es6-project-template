class App {
  constructor() {
    this.init();
  }

  init() {
    window.document.body.innerHTML = 'Hello Earth!';
    return this;
  }
}

window.APP = new App();
