angular.module('blog-app.login', [
  'ui.router', 'templates-app'
])
  .config(function ($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'login/login.tpl.html',
          controller: 'LoginCtrl as loginCtrl'
      });
  })
  .controller('LoginCtrl', function($scope) {
    var loginCtrl = this;
      loginCtrl.loggedIn = false;
  })
  .value('test', 2)
;
