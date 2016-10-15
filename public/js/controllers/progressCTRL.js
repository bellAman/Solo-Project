angular.module('trackerApp').controller('progressCTRL',function($scope, $state, studentService){
  // $scope.test = "contoller ready"
  $scope.revealer = function(){
    this.hide = !this.hide;
    this.show = !this.show;
  }
  $scope.student= JSON.parse(localStorage.getItem("student"));
  $scope.goalId = parseInt($state.params.id);
  $scope.studentId = $scope.student[0].id;
  function logincheck(){
    if(!$scope.student){
      $state.go('studentLogin')
    }
  }
  logincheck()


$scope.getGoal = function(id){
  studentService.getOneGoal(id).then(function(response){

    $scope.goal = response[0]
  })
}
$scope.getGoal($scope.goalId);

$scope.getSteps = function(sId, gId){
  studentService.getSteps(sId, gId).then(function(response){
    response.sort(function(a, b){
    if (a.stepnumber > b.stepnumber) {
        return 1;
      }
      if (a.stepnumber < b.stepnumber) {
        return -1;
      }
      return 0;
    });

    $scope.steps = response
    console.log(response);
  })
}
$scope.getSteps($scope.studentId, $scope.goalId);

$scope.changeStatusHelp = function(stepnum){
  var newStatus = {}
  newStatus.stepnum = stepnum
  newStatus.goalId = $scope.goalId
  newStatus.studentId = $scope.studentId
  newStatus.status = 'needhelp'
  studentService.changeStatus(newStatus).then(function(response){
    if(response.status === 200){
      $scope.getSteps($scope.studentId, $scope.goalId);
    };
  });
}

$scope.changeStatusDone = function(stepnum){
  var newStatus = {}
  newStatus.stepnum = stepnum
  newStatus.goalId = $scope.goalId
  newStatus.studentId = $scope.studentId
  newStatus.status = 'done'
  studentService.changeStatus(newStatus).then(function(response){
    if(response.status === 200){
      $scope.getSteps($scope.studentId, $scope.goalId);
    };
  });
}

$scope.changeStatusWorking = function(stepnum){
  var newStatus = {}
  newStatus.stepnum = stepnum
  newStatus.goalId = $scope.goalId
  newStatus.studentId = $scope.studentId
  newStatus.status = 'inprogress'
  studentService.changeStatus(newStatus).then(function(response){
    if(response.status === 200){
      $scope.getSteps($scope.studentId, $scope.goalId);
    };
  });
}

});
