angular.module('armchairApp')
.controller('ThreeCarouselsController', ['$scope', 'likedFactory', 'localStorageService', function($scope, likedFactory, localStorageService){
  var authData = localStorageService.get('authorizationData');

  $scope.sendLike = function (furnId, suite, idx) {
    if (authData)
    {
      var liked = { userName: authData.userName, idFurn: furnId };
      likedFactory.getLikedOnes().save(liked,
        function(response){
          console.log(response);
          switch(suite){
            case 1:
                $scope.entity.suite1[idx].liked = true;
                break;
            case 2:
                $scope.entity.suite2[idx].liked = true;
                break;
            case 3:
                $scope.entity.suite3[idx].liked = true;
          };
        },
        function(response){
          console.log("Error: "+response.status+" "+response.statusText);
        });
    }
    else {
      $('#warnModal').modal('show');
    }
  };

  $scope.sendUnlike = function (furnId, suite, idx) {
    if (authData)
    {
      likedFactory.getLikedOnes().remove({userName: authData.userName, idFurn: furnId},
        function(response){
          console.log(response);
          switch(suite){
            case 1:
                $scope.entity.suite1[idx].liked = false;
                break;
            case 2:
                $scope.entity.suite2[idx].liked = false;
                break;
            case 3:
                $scope.entity.suite3[idx].liked = false;
          };
        },
        function(response){
          console.log("Error: "+response.status+" "+response.statusText);
        });
    }
  };
}]);

function ThreeCarouselsController() {

}
