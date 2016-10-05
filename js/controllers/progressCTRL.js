angular.module('trackerApp').controller('progressCTRL',function($scope){
  // $scope.test = "contoller ready"
  $scope.revealer = function(){
    $scope.hide = !$scope.hide;
    $scope.show = !$scope.show;
  }

})
