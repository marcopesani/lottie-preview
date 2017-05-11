class AppController {
  constructor() {
    this.animations = [];
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
