angular.module('trackerApp').controller('addStudentCTRL',function($scope, teacherService){
    $scope.test = "add contoller ready"
  $scope.user= JSON.parse(localStorage.getItem("user"));
  $scope.getGroups = function(user){
    teacherService.getMyGroups(user).then(function(response){
    $scope.groups = response.data;
  })
}
$scope.getStudents = function(user){
  teacherService.getMyStudents(user).then(function(response){
  $scope.students = response.data;
})
}
  $scope.getGroups($scope.user);
  $scope.getStudents($scope.user);

  $scope.revealer = function(){
    $scope.show = !$scope.show
    $scope.hide = !$scope.hide
  }
});
