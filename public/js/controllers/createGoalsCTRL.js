angular.module('trackerApp').controller('createGoalsCTRL', function($scope, teacherService, userService){

   $scope.user= JSON.parse(localStorage.getItem("user"));
   $scope.getGroups = function(user){

     teacherService.getMyGroups(user).then(function(response){
     $scope.groups = response.data;
   })
 }
 $scope.getGroups($scope.user);

$scope.goalID = {};
 var userId = $scope.user.id
 $scope.makeGoal = function(info){
   info.id = $scope.user.id
   teacherService.addGoal(info).then(function(response){
     if(response){
       $scope.goalID[0] =response[0].id
       alert("A new goal has been made")
       $scope.info = null
     }
 })
 }
 $scope.makeStep = function(step){
   step.id = $scope.goalID[0]
   teacherService.addStep(step).then(function(response){
     if(response.status === 200){
       alert('new step added')
       $scope.step = null
     }
   })
 }

var numUsed = {};
var groupid= [];
$scope.idCheck = function(id){
if(document.getElementById("checkbox").click){
   var index = groupid.indexOf(id)
     if(index !== -1){
     groupid.splice(index, 1)
     }
     else{
     groupid.push(id)
   }
}
$scope.groupIds = groupid
}

$scope.students= [];
$scope.setProgress = function(){
  var ids = $scope.groupIds
  for(var i = 0; i < ids.length; i++){
     teacherService.getStudentsInGroup(ids[i]).then(function(response){
      for(var j = 0; j < response.length; j ++){
        $scope.students.push(response[j])
      }
      })
  }
  alert('students set')
}
//$scope.goal = {}
  $scope.finishGoal = function(){
    teacherService.getSteps($scope.goalID[0]).then(function(response){
      var steps = response
      var calls =[];

      for(var y = 0; y < steps.length; y++){

        var students = $scope.students.slice()
        for(var k = 0; k < students.length; k++){
          var goal= {}
          goal.stepnum = steps[y].stepnumber
          goal.student = students[k].studentid
          goal.goalId = $scope.goalID[0]
          console.log(goal);
         calls.push(outer(goal, k));
        }
      }
      calls.forEach(function(element){
        element()
      })
        })
      function outer(chicken, cow){
        return function inner(){
          console.log(chicken);
          console.log(cow++);
          teacherService.addGoaltoProgress(chicken).then(function(response){
              if(response.status === 200){
               }
             })
        }
      }



  }

  //
  //


});
