angular.module('trackerApp').controller('monitoringCTRL', function($scope, monitoringService){
  $scope.test="monitoringCTRL ready"
  $scope.user= JSON.parse(localStorage.getItem("user"));
  $scope.getGoals = (function(){
    monitoringService.getGoals($scope.user).then(function(response){
    $scope.goals = response.data;
  })
})();


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
$scope.studentsData = [];

var numUsed = {};
$scope.getStudents = function(id){
 if(numUsed[id]){
    return
 }


 //setInterval(function(){
  $scope.id = id
   monitoringService.getStudents(id).then(function(responseB){
     var sIDarray = [];
          var students = responseB.data
          for(var i = 0; i < students.length; i++){
            sIDarray.push(students[i].studentid)
            $scope.studentsData.push(new Student(id, students[i].studentid, students[i].username))
          }
          for(var x = 0; x < sIDarray.length; x++){
             var sId = sIDarray[x]
             var gId = $scope.id
             $scope.getSteps = function(gId, sId){
                monitoringService.getSteps(gId, sId).then(function(responseC){
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
   numUsed[id]= true;
//console.log('ran');
//},5000,id)
};
// $scope.clearFn = function(){
//
//   clearInterval();}

});
