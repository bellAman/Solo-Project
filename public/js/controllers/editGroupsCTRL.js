angular.module('trackerApp').controller('editGroupsCTRL',function($scope, teacherService, $state){
  $scope.test ="Are you ready"
  console.log($state.params.id);
  $scope.user= JSON.parse(localStorage.getItem("user"));

  $scope.getStudents = function(user){
    teacherService.getMyStudents(user).then(function(response){
    $scope.students = response.data;
    console.log(response.data);
  })
  }
  $scope.getStudents($scope.user);

   $scope.getGroup = function(id){
     teacherService.getGroup(id).then(function(response){
       $scope.group = response
     })
   }
  $scope.getGroup($state.params.id);

  $scope.getMembers = function(id){
    teacherService.getStudentsInGroup(id).then(function(response){
      $scope.members = response
    })
  }
 $scope.getMembers($state.params.id);


});
