angular.module('trackerApp')
.controller('teacherLoginCTRL', function($scope, userService, $state){
  //$scope.test="teacherLoginCTRL ready"
  $scope.revealer = function(){
    $scope.hide = !$scope.hide;
  //  $scope.show = !$scope.show;
  }
$scope.user = 'NOT LOGGED IN';
  function getUser() {
      userService.getUser().then(function(user) {
        console.log(user);
        if (user) {$state.go('teacherHome');
        function populateStorage(){
          localStorage.setItem("user", JSON.stringify(user));
          };
          populateStorage();
}
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

    $scope.makeUser = function(message){

      if (message) {
        userService.addUser(message).then(function ( response ) {
          if(response.status === 200){
            alert('Welcome to Tracker')
          }
          else{
            alert('error')
          }
          })
      }
    }


  })

//   $scope.testUsers = function(){
//     teacherService.getUsers().then(function(response){
//       console.log(response)
//   })
// }
