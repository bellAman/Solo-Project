angular.module('trackerApp').controller('teacherHomeCTRL', function($scope, userService, $state){
    $scope.user= JSON.parse(localStorage.getItem("user"));
    function logincheck(){
      if(!$scope.user){
        $state.go('teacherLogin')
      }
    }
    logincheck()
    $scope.leave = function(user){
       $state.go('teacherLogin')
       localStorage.removeItem("user");
    }

   $scope.logout = userService.logout;

})
