import './List.scss';

class ListController {
  /** @ngInject */
  constructor(animationService) {
    this.animationService = animationService;
  }
}

export const List = {
  template: require('./List.html'),
  controller: ListController,
  bindings: {
    animations: '='
  }
};
