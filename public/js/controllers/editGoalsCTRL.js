angular.module('trackerApp').controller('editGoalsCTRL', function($scope, $state, teacherService){
//  $scope.test="editGoalsCTRL ready"
$scope.user= JSON.parse(localStorage.getItem("user"));
function logincheck(){
  if(!$scope.user){
    $state.go('teacherLogin')
  }
}
logincheck()
$scope.getGoal = function(id){
  teacherService.getOneGoal(id).then(function(response){
    $scope.goal = response[0]
  })
}
  $scope.getGoal($state.params.id)
 $state.getStudents = function(id){
   teacherService.getStudentsByGoal(id).then(function(response){
     $scope.members = response
   })
 }
 $state.getStudents($state.params.id)

 $state.getAllStudents = function(user){
   teacherService.getMyStudents(user).then(function(response){
     $scope.students = response.data
   })
 }
 $state.getAllStudents($scope.user)

$state.getSteps = function(id){
  teacherService.getSteps(id).then(function(response){
    $scope.steps = response
  })
}
$state.getSteps($state.params.id)

 $scope.revealer = function(){
   this.hide = !this.hide;
   this.show = !this.show;
 }

 $scope.removeStudent = function(sId, i){
    var gId = parseInt($state.params.id)
    teacherService.removeStudentFromGoal(sId, gId).then(function(response){
      if(response.status === 200){
       $scope.members.splice(i, 1)
     }
    })
 }

 var studentids = [];
 $scope.idCheck = function(id){
 if(document.getElementById("checkbox").click){
    var index = studentids.indexOf(id)
      if(index !== -1){
      studentids.splice(index, 1)
      }
      else{
      studentids.push(id)
    }
 }
 $scope.studentIds = studentids
 }

$scope.addStudentsToGoal = function(){
  //teacherService.getSteps(parseInt($state.params.id)).then(function(response){
    var steps = $scope.steps //response
    var calls =[];
    for(var y = 0; y < steps.length; y++){
      var students = $scope.studentIds.slice()
      for(var k = 0; k < students.length; k++){
        var goal= {}
        goal.stepnum = steps[y].stepnumber
        goal.student = students[k]
        goal.goalId = parseInt($state.params.id)
       calls.push(outer(goal, k));
      }
    }
    calls.forEach(function(element){
      element()
    })
    //  })
    function outer(chicken, cow){
      return function inner(){
        teacherService.addGoaltoProgress(chicken).then(function(response){
            if(response.status === 200){
              $state.getStudents($state.params.id)
             }
           })
      }
    }
}

  $scope.removeStep = function(num, i){
    var goalId = parseInt($state.params.id)
    teacherService.removeStep(num, goalId).then(function(response){
      if(response.status === 200){
       $scope.steps.splice(i, 1)
     }
    })
  }

  $scope.makeStep = function(step){
    step.id = parseInt($state.params.id)
    teacherService.addStep(step).then(function(response){
      if(response.status === 200){
        $state.getSteps($state.params.id)
        $scope.step = null
      }
    })
  }
  $scope.assign = function(){
    teacherService.assignGoal($state.params.id).then(function(response){
      if(response.status ===200){
        alert('This goal has been assigned to students')
      }
    })
  }


});
