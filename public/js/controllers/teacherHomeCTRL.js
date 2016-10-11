angular.module('trackerApp').controller('teacherHomeCTRL', function($scope, userService, $state){
//  $scope.test= "working"
    $scope.user= JSON.parse(localStorage.getItem("user"));

    $scope.leave = function(user){
       $state.go('teacherLogin')
       localStorage.removeItem("user");
    }

   $scope.logout = userService.logout;

})
