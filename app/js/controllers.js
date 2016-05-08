'use strict';

angular.module('armchairApp')

    .controller('FurnController', ['$scope', 'furnitureFactory', function ($scope, furnitureFactory) {
        $scope.furns = furnitureFactory.getFurnitures();
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

    .controller('LikedController', ['$scope', 'likedFactory', function ($scope, likedFactory) {
        $scope.likedOnes = likedFactory.getLikedOnes();

        $scope.feedback = { email: "", title: "", question: "" };

    }])

    .controller('FeedbackController', ['$scope', function ($scope) {
        $scope.sendFeedback = function () {
            $scope.feedback = { email: "", title: "", question: "" };
            $scope.feedbackForm.$setPristine();
            console.log($scope.feedback);
        };
    }])
;
