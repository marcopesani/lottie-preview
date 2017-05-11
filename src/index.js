import angular from 'angular';
import jquery from 'jquery';

angular.element = jquery;

import {AnimationService} from './app/animations/animations';
import {App} from './app/containers/App';
import {Preview} from './app/components/Preview';
import {List} from './app/components/List';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('lottiePreviewApp', ['ui.router'])
  .config(routesConfig)
  .service('animationService', AnimationService)
  .component('app', App)
  .component('previewComponent', Preview)
  .component('listComponent', List);