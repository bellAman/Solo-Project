angular.module('trackerApp').controller('savedGoalsCTRL', function($scope, teacherService){
  // $scope.test="savedGoalsCTRL ready"
    $scope.user= JSON.parse(localStorage.getItem("user"));
    $scope.getGoals = function(user){

      teacherService.getGoals(user).then(function(response){
      $scope.goals = response.data;
    })
  }
  $scope.getGoals($scope.user);
})
