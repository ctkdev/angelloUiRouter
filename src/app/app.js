angular.module('blog-app', [
    'ui.router',
    'js-data',
    'templates-app',
    'blog-app.login'
])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('root', {
                url: '/',
                templateUrl: 'main.tpl.html'
            });

        $urlRouterProvider.otherwise('/');

    })
    .controller('MainCtrl', function ($scope) {
        var main = this;
    })

;



