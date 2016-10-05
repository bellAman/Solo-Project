angular.module('trackerApp').controller('teacherLoginCTRL', function($scope){
  //$scope.test="teacherLoginCTRL ready"
  $scope.revealer = function(){
    $scope.hide = !$scope.hide;
  }
})
