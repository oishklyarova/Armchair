'use strict';

angular.module('armchairApp')

    .controller('FurnController', ['$scope', 'furnitureFactory', 'promoFactory', 'localStorageService', function ($scope, furnitureFactory, promoFactory, localStorageService) {
        var usName = null;
        var authData = localStorageService.get('authorizationData');
        authData ? usName = authData.userName : usName = null;

        furnitureFactory.getFurnitures().query({userName: usName},
          function(response){
            $scope.furns = response;
          });

        promoFactory.getPromotions().query(
          function(response){
            $scope.promotions = response;
          });
        // $scope.furns = furnitureFactory.getFurnitures().query();

        // $scope.loadMore = function(){
        //   var moreFurn = furnitureFactory.getFurnitures().query({page: $scope.furns.length / 2});
        //   $scope.furns = $scope.furns.concat(moreFurn);
        // };

        $scope.loadMore = function(){
        furnitureFactory.getFurnitures().query({userName:usName, page: $scope.furns.length / 2},
          function(response){
            var moreFurn = response;
            $scope.furns = $scope.furns.concat(moreFurn);
          })
        };

        // furnitureFactory.getFurnitures().query({page: $scope.furns.Length / 2}).$promise.then(function(data){
        //     var moreFurn = data;
        //     $scope.furns = $scope.furns.concat(moreFurn);
        // })

        // furnitureFactory.getFurnitures().query().$promise.then(function(data){
        //   $scope.furns = data;
        // });

        // vm = this;
        // vm.loadMore = loadMore;
        // vm.pageArmchair = 0;
        // vm.pageSofa = 0;
        // vm.limit = 3;
        //
        // function loadMore() {
        //   vm.furns.data.push(getMoreFurniture(vm.pageArmchair++, vm.limit));
        //   vm.furns.data.push(getMoreFurniture(vm.pageArmchair++, vm.limit));
        //
        //   vm.furns.data.push(getMoreFurniture(vm.pageSofa++, vm.limit));
        // }
    }])

    .controller('LikedController', ['$scope', 'likedFactory', 'localStorageService', function ($scope, likedFactory, localStorageService) {
        var authData = localStorageService.get('authorizationData');
        if (authData)
        {
          $scope.likedOnes = likedFactory.getLikedOnes().query({userName: authData.userName},
            function(response){
              $scope.likedOnes = response;
            }
          );
        }

        $scope.feedback = { email: "", title: "", question: "" };

    }])

    .controller('FeedbackController', ['$scope', 'feedbackFactory', function ($scope, feedbackFactory) {
        $scope.message = "";
        $scope.sendFeedback = function () {
            feedbackFactory.getFeedbacks().save($scope.feedback,
              function(response){
                console.log(response);
                $scope.message = "Ваш вопрос удачно отправлен!";
              },
              function(response){
                console.log("Error: "+response.status+" "+response.statusText);
                $scope.message = "Отправка не удалась: "+response.status+" "+response.statusText
              });
            $scope.feedback = { email: "", title: "", question: "" };
            $scope.feedbackForm.$setPristine();
            console.log($scope.feedback);
        };
    }])

    .controller('AuthController', ['$scope', 'localStorageService', 'authService', '$state', function ($scope, localStorageService, authService, $state) {
        $scope.showLoginModal = function () {
            $('#loginModal').modal('show');
        };

        $scope.showSignUpModal = function () {
            $('#signUpModal').modal('show');
        };

        $scope.isLoggedIn = function() {
          var authData = localStorageService.get('authorizationData');
          return (authData) ? true : false;
        };

        $scope.getUserName = function() {
          var authData = localStorageService.get('authorizationData');
          return (authData) ? authData.userName : null;
        };

        $scope.logOut = function () {
            authService.logOut();
            $state.reload();
        };
    }])

    .controller('signupController', ['$scope', '$timeout', 'authService', function ($scope, $timeout, authService) {

        $scope.savedSuccessfully = false;
        $scope.message = "";

        $scope.registration = {
            userName: "",
            password: "",
            confirmPassword: ""
        };

        $scope.signUp = function () {

            authService.saveRegistration().save($scope.registration,
                function(response){
                  $scope.savedSuccessfully = true;
                  $scope.message = "Вы успешно зарегистрировались.";
                  startTimer();
                },
                function(response){
                  var errors = [];
                  for (var key in response.data.modelState) {
                      for (var i = 0; i < response.data.modelState[key].length; i++) {
                          errors.push(response.data.modelState[key][i]);
                      }
                  }
                  $scope.savedSuccessfully = false;
                  $scope.message = "Ошибка: " + errors.join(' ');
                });
        };

        var startTimer = function () {
            var timer = $timeout(function () {
                $timeout.cancel(timer);
                $scope.dismiss();
            }, 2000);
        }
    }])

    .controller('loginController', ['$scope', 'authService', '$state', function ($scope, authService, $state) {

        $scope.loginData = {
            userName: "",
            password: ""
        };

        $scope.loginSuccessfully = false;
        $scope.message = "";

        $scope.login = function () {

            authService.login($scope.loginData).then(function (response) {

                $scope.loginSuccessfully = true;
                $scope.dismiss();
                $state.reload();
            },
             function (err) {
                $scope.loginSuccessfully = false;
                $scope.message = "Ошибка: " + err.data.error_description;
             });
        };

        $scope.close = function () {
          $scope.loginSuccessfully = false;
          $scope.message = "";
        }

    }])
;
