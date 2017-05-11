export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $logProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $logProvider.debugEnabled(true);

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    });
}
