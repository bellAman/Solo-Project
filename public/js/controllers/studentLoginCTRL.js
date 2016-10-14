angular.module('trackerApp').controller('studentLoginCTRL', function($scope, studentService, $state){
  //$scope.test="studentLoginCTRL ready"
  $scope.getStudent = function(student){
    studentService.getStudent(student).then(function(response){
      if(response){$state.go('studentHome')
        function populateStorage(){
          localStorage.setItem("student", JSON.stringify(response));
        }
        populateStorage();
      }
      else {
        alert("Sorry, that login information is incorrect.")
      }
    })
  }


});
