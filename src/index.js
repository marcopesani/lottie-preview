import angular from 'angular';
import jquery from 'jquery';

angular.element = jquery;

import {AnimationService} from './app/animations/animations';
import {App} from './app/containers/App';
import {Drop} from './app/components/Drop';
import {Preview} from './app/components/Preview';
import {List} from './app/components/List';
import {ListItem} from './app/components/ListItem';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('lottiePreviewApp', ['ui.router'])
  .config(routesConfig)
  .service('animationService', AnimationService)
  .component('app', App)
  .component('dropComponent', Drop)
  .component('previewComponent', Preview)
  .component('listComponent', List)
  .component('listItemComponent', ListItem);