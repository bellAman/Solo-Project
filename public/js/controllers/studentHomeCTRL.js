angular.module('trackerApp').controller('studentHomeCTRL', function($scope, studentService){
  $scope.test="studentHomeCTRL ready"
  $scope.student= JSON.parse(localStorage.getItem("student"));

  var studentId = $scope.student[0].id
  $scope.getGoals = function(id){
    studentService.getGoals(id).then(function(response){
      $scope.goals = response
    })
  }
  $scope.getGoals(studentId)



});
