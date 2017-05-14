import angular from 'angular';

export class DropController {
  /** @ngInject */
  constructor($q, $log, animationService) {
    this.$q = $q;
    this.$log = $log;
    this.animationService = animationService;
  }

  readFiles(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Only process json files.
      if (!file.type.match('application/json')) {
        continue;
      }

      this
        .loadAnimation(file)
        .then(payload => {
          this.animationLoaded(payload);
        });
    }
  }

  animationLoaded(payload) {
    const string = payload.event.target.result;
    const json = angular.fromJson(string);

    // Update the model
    this.onLoad({
      animation: {
        json,
        name: payload.file.name
      }
    });
  }

  loadAnimation(file) {
    const reader = new FileReader();
    const deferred = this.$q.defer();

    reader.onload = event => {
      const payload = {file, event};
      deferred.resolve(payload);
    };

    reader.readAsText(file);

    return deferred.promise;
  }

  $postLink() {
    const dropzone = angular.element('.drop');
    dropzone.on('dragover', event => {
      event.preventDefault();
      event.stopPropagation();
      event.originalEvent.dataTransfer.dropEffect = 'copy';
    });

    dropzone.on('drop', event => {
      event.preventDefault();
      event.stopPropagation();

      const files = event.originalEvent.dataTransfer.files;
      this.readFiles(files);
    });
  }
}

export const Drop = {
  template: require('./Drop.html'),
  bindings: {
    animations: '<',
    currentAnimation: '<',
    onLoad: '&'
  },
  controller: DropController
};