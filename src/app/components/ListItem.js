import './ListItem.scss';

class ListItemController {
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
    animationId: '<',
    onSelect: '&',
    onDelete: '&'
  }
};