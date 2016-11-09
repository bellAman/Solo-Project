angular.module('trackerApp').controller('studentLoginCTRL', function($scope, studentService, $state){
  $scope.getStudent = function(student){
    studentService.getStudent(student).then(function(response){
     if(response[0] === undefined){
       alert("Sorry, that login information is incorrect.")
     }
      else {
        $state.go('studentHome')
           function populateStorage(){
             localStorage.setItem("student", JSON.stringify(response));
           }
           populateStorage();
      }
    })
  }


});
