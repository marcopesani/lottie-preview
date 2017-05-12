import uuid from 'uuid';

export class AnimationService {
  /** @ngInject */
  constructor($log) {
    this.$log = $log;
  }

  addAnimation(json, animations) {
    this.$log.info('AnimationService.addAnimation', json);
    const animationId = uuid.v4();
    animations[animationId] = json;
    return angular.copy(animations);
  }

  deleteAnimation(id, animations) {
    this.$log.info('AnimationService.deleteAnimation', id);
    delete animations[id];
    return angular.copy(animations);
  }

  getLastId(animations) {
    const keys = Object.keys(animations);
    const lastKeyIndex = keys.length - 1;
    return keys[lastKeyIndex];
  }
}