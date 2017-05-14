class ListItemController {
  constructor() {
    this.isHover = false;
  }
  openAnimation($event, id) {
    $event.preventDefault();

    this.onSelect({id});
  }

  deleteAnimation($event, id) {
    $event.preventDefault();

    this.onDelete({id});
  }
}

export const ListItem = {
  template: require('./ListItem.html'),
  controller: ListItemController,
  bindings: {
    isCurrent: '<',
    isEven: '<',
    animationId: '<',
    animation: '<',
    onSelect: '&',
    onDelete: '&'
  }
};