import './List.scss';

class ListController {
  /** @ngInject */
  constructor() {
    this.animationsCount = 0;
    this.showList = false;
  }

  $onChanges() {
    this.animationsCount = Object.keys(this.animations).length;
  }

  toggleList($event) {
    $event.preventDefault();
    this.showList = !this.showList;
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
