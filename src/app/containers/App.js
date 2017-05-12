class AppController {
  /** @ngInject */
  constructor($log, animationService) {
    this.$log = $log;
    this.animationService = animationService;
    this.animations = {};
    this.currentAnimation = null;
  }

  addAnimation(animation) {
    const newAnimations = this.animationService.addAnimation(animation, this.animations);
    this.animations = newAnimations;
    this.currentAnimation = this.animationService.getLastId(this.animations);
  }

  selectAnimation(id) {
    this.currentAnimation = id;
  }

  deleteAnimation(id) {
    this.animations = this.animationService.deleteAnimation(id, this.animations);
    this.currentAnimation = (this.currentAnimation === id) ? this.animationService.getLastId(this.animations) : this.currentAnimation;
  }

  clearAnimations() {
    this.animations = {};
    this.currentAnimation = null;
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
