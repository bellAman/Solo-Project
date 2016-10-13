angular.module('trackerApp').controller('createGoalsCTRL', function($scope, teacherService, userService){
  //$scope.test="createGoalsCTRL ready"
//   $scope.steps = new Array();
//   $scope.makeStepInput = function(){
//     console.log('fired');
//
//     var x = $scope.numSteps;
//      for(var i = 0; i < x; i++){
//       $scope.steps.push(i);
//      }
//
//    }
// console.log($scope.0);

   $scope.user= JSON.parse(localStorage.getItem("user"));
   $scope.getGroups = function(user){

     teacherService.getMyGroups(user).then(function(response){
     $scope.groups = response.data;
   })
 }
 $scope.getGroups($scope.user);

 var userId = $scope.user.id
 $scope.makeGoal = function(info, userId){
   //console.log('fired');
   //console.log(info);
 }
console.log();

var numUsed = {};
$scope.idCheck = function(id){
if(document.getElementById("checkbox").checked === true){
  if(numUsed[id]){
     return
  }
  //console.log(id)
};
numUsed[id]= true;
}



$scope.makeSteps = function(steps){
  //console.log('fired');
  //console.log(steps);
}

});
