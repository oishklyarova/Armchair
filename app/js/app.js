'use strict';

//$('.carousel').carousel({
//    interval: false
//});

//var i;

//$('.carousel-control').on("mouseover", function () {
//    var control = $(this),
//        interval = 2500;

//    i = setInterval(function () {
//        control.trigger("click");
//    }, interval);
//})
//.on("mouseout", function () {
//    clearInterval(i);
//});

angular.module('armchairApp',['ui.router','ngResource','LocalStorageModule','ngRoute'])
  .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/furniture.html'
                        //template : '<h1>To be Completed</h1>',
                        //controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
                    // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        //template: '<h1>To be Completed</h1>'
                        templateUrl: 'views/aboutus.html'
                   }
                }
            })
                    // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html'//,
                        //controller  : 'ContactController'
                     }
                }
            })

            // route for the menu page
            .state('app.liked', {
                url: 'liked',
                views: {
                    'content@': {
                        templateUrl : 'views/liked.html',
                        // controller  : 'LikedController'
                    }
                }
            })

            // $urlRouterProvider.otherwise('/');
            $urlRouterProvider.when('', '/');

  })

  .run(['$state', function ($state) {
    $state.transitionTo('app');
  }])

  .run(function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
  })

  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
  })

  .run(['authService', function (authService) {
    authService.fillAuthData();
  }])
  // .directive('jsCarousel', function () {
  //     return {
  //         link: function($scope, element, attrs) {
  //             $('.carousel').carousel({
  //                 interval: false
  //             });
  //
  //             //var i;
  //
  //             //$('.carousel-control').on("mouseover", function () {
  //             //    var control = $(this),
  //             //        interval = 2500;
  //
  //             //    i = setInterval(function () {
  //             //        control.trigger("click");
  //             //    }, interval);
  //             //})
  //             //.on("mouseout", function () {
  //             //    clearInterval(i);
  //             //});
  //         }
  //     }
  // })
;
