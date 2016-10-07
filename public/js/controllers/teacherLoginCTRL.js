angular.module('trackerApp')
.controller('teacherLoginCTRL', function($scope, userService, $state){
  //$scope.test="teacherLoginCTRL ready"
  $scope.revealer = function(){
    $scope.hide = !$scope.hide;
  }
$scope.user = 'NOT LOGGED IN';
  function getUser() {
      userService.getUser().then(function(user) {
        console.log(user);
        if (user) $state.go('teacherHome')

        //  $scope.user = user.firstname;
        else   $scope.user = 'NOT LOGGED IN';
      })
    }



    $scope.loginLocal = function(email, password) {
      console.log('Logging in with', email, password);
      userService.loginLocal({
        username: email,
        password: password
      })
      .then(function(res) {
        getUser();
      })
    }

    // $scope.logout = userService.logout;


  })

//   $scope.testUsers = function(){
//     teacherService.getUsers().then(function(response){
//       console.log(response)
//   })
// }
