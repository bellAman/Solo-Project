angular.module('trackerApp').controller('createGoalsCTRL', function($scope, teacherService, userService){
  //$scope.test="createGoalsCTRL ready"
  $scope.steps = new Array();
  $scope.makeGoal = function(){
    var x = $scope.numSteps;
    for(var i = 0; i < x; i++){
      $scope.steps.push(i);
    }
   }

   $scope.user= JSON.parse(localStorage.getItem("user"));
   $scope.getGroups = function(user){

     teacherService.getMyGroups(user).then(function(response){
     $scope.groups = response.data;
   })
 }
 $scope.getGroups($scope.user);
})
