import angular from 'angular';
import bodymovin from 'bodymovin';

export class PreviewController {
  /** @ngInject */
  constructor($log) {
    this.$log = $log;
  }

  $onChanges() {
    this.$log.info(this);
    if (!this.currentAnimation || !this.animations[this.currentAnimation]) {
      return;
    }

    const animation = this.animations[this.currentAnimation];
    const container = angular.element('.preview');
    const config = {
      animationData: animation.json,
      loop: true,
      autoplay: true,
      name: 'preview',
      renderer: 'svg',
      container: container[0]
    };

    // Clear the container
    container.empty();

    // Update the container size
    container.width(animation.w);
    container.height(animation.h);

    // Load the animation
    bodymovin.loadAnimation(config);
  }
}

export const Preview = {
  template: require('./Preview.html'),
  bindings: {
    animations: '<',
    currentAnimation: '<'
  },
  controller: PreviewController
};