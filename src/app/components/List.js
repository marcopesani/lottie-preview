class ListController {
  /** @ngInject */
  constructor() {
    this.animationsCount = 0;
  }

  $onChanges() {
    this.animationsCount = Object.keys(this.animations).length;
  }

  selectAnimation(id) {
    this.onSelect({id});
  }

  deleteAnimation(id) {
    this.onDelete({id});
  }

  clearAnimations($event) {
    $event.preventDefault();
    this.onClear();
  }
}

export const List = {
  template: require('./List.html'),
  controller: ListController,
  bindings: {
    animations: '<',
    currentAnimation: '<',
    onSelect: '&',
    onDelete: '&',
    onClear: '&'
  }
};
