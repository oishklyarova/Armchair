angular.module('armchairApp')
       .directive('threeCarousels', threeCarousels);

function threeCarousels() {
  var directive = {
    controller: 'ThreeCarouselsController',
    controllerAs: 'vm',
    templateUrl: 'widgets/threeCarousels/threeCarousels.html',
    restrict: 'AE',
    scope: {
      entity: '='
    }
  };
  return directive;
}
