import angular from 'angular';
import bodymovin from 'bodymovin';
import './Preview.scss';

export class PreviewController {
  /** @ngInject */
  constructor($log, $scope, animationService) {
    this.$log = $log;
    this.$scope = $scope;
    this.animationService = animationService;
    // Bind events
    const dropzone = angular.element('div#dropzone');
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

  readFiles(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Only process json files.
      if (!file.type.match('application/json')) {
        continue;
      }

      this.renderAnimation(file);
    }
  }

  renderAnimation(file) {
    const reader = new FileReader();
    const container = angular.element('.preview-container');

    container.empty();

    reader.onload = event => {
      const string = event.target.result;
      const json = angular.fromJson(string);
      this.$log.info('Version:  ' + json.v);
      this.$log.info('Height:   ' + json.h);
      this.$log.info('Width:    ' + json.w);
      this.$log.info('Framerate:' + json.fr);
      this.$log.info('Frames:   ' + json.op);
      this.$log.info('JSON', json);
      container.width(json.w);
      container.height(json.h);
      bodymovin.loadAnimation({
        animationData: json,
        loop: true,
        autoplay: true,
        name: 'preview',
        renderer: 'svg',
        container: container[0]
      });
    };

    reader.readAsText(file);
  }
}

export const Preview = {
  template: require('./Preview.html'),
  replace: true,
  restrict: 'E',
  scope: {
    animations: '='
  },
  controller: PreviewController
};