angular.module('trackerApp').controller('monitoringCTRL', function($scope, monitoringService, teacherService, $state, $interval){
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


Student = function(goalId, studentId, studentName){
  this.goalId = goalId
  this.id = studentId;
  this.name = studentName;
  this.steps = [];
}
Step = function(id, student, stepnum, status){
  this.goalId = id
  this.studentId = student
  this.stepnumber = stepnum;
  this.status = status;
}

var intervalids = [];
var numUsed = {};
$scope.getStudents = function(id){
$scope.studentsData = [];
$scope.id = id
   monitoringService.getStudents(id).then(function(responseB){
     var sIDarray = [];
          var students = responseB.data.sort(function(a, b) {
              var nameA = a.username.toUpperCase();
              var nameB = b.username.toUpperCase();
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              return 0;
            })
          for(var i = 0; i < students.length; i++){
            sIDarray.push(students[i].studentid)
            $scope.studentsData.push(new Student(id, students[i].studentid, students[i].username))
          }
          for(var x = 0; x < sIDarray.length; x++){
             var sId = sIDarray[x]
             var gId = $scope.id
             $scope.getSteps = function(gId, sId){
                monitoringService.getSteps(gId, sId).then(function(responseC){
                  responseC.sort(function(a, b){
                  if (a.stepnumber > b.stepnumber) {
                      return 1;
                    }
                    if (a.stepnumber < b.stepnumber) {
                      return -1;
                    }
                    return 0;
                  });
                  var data = $scope.studentsData
                  for(var y = 0; y < data.length; y++){
                      for(var z = 0; z < responseC.length; z++){
                          if(responseC[z].studentid === data[y].id && $scope.id === data[y].goalId){
                            data[y].steps.push(new Step($scope.id , responseC[z].studentid, responseC[z].stepnumber, responseC[z].status) )
                          }
                      }
                  }
                  $scope.students = data
                })
            }
            $scope.getSteps(gId, sId);
          }
   })
};

$scope.getStudents($state.params.id)

 $scope.refresh = $interval(function(){
   $scope.getStudents($state.params.id)
},2000)


$scope.removeMyAssign = function(id){
  var me = {}
  me.gId= $scope.id
  me.sId = id
  monitoringService.removeMyAssign(me).then(function(response){

  })
}

$scope.unassignGoal = function(id){
  teacherService.unassignGoal(id).then(function(response){
    if (response.status === 200){
      $state.go('teacherHome')
    }
  })
}

$scope.$on("$destroy",function(){
    if (angular.isDefined($scope.refresh)) {
        $interval.cancel($scope.refresh);
    }
});

});
