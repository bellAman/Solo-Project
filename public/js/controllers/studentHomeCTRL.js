angular.module('trackerApp').controller('studentHomeCTRL', function($scope, studentService, $state){
  $scope.test="studentHomeCTRL ready"
  $scope.student= JSON.parse(localStorage.getItem("student"));
  console.log($scope.student);
function logincheck(){
  if(!$scope.student){
    $state.go('studentLogin')
  }
}
logincheck()
  var studentId = $scope.student[0].id
  $scope.getGoals = function(id){
    // if(!id){
    //   $state.go('studentLogin')
    // }
    studentService.getGoals(id).then(function(response){
      $scope.goals = response
    })
  }
  $scope.getGoals(studentId)

  $scope.leave = function(student){
     $state.go('studentLogin')
     localStorage.removeItem("student");
  }

});
