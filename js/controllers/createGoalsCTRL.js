angular.module('trackerApp').controller('createGoalsCTRL', function($scope){
  //$scope.test="createGoalsCTRL ready"
  $scope.steps = new Array();
  $scope.makeGoal = function(){
    var x = $scope.numSteps;
    for(var i = 0; i < x; i++){
      $scope.steps.push(i);
    }
  //   alert('Goal Saved');
   }
})
