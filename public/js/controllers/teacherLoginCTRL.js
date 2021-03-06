angular.module('trackerApp')
.controller('teacherLoginCTRL', function($scope, userService, $state){
  $scope.revealer = function(){
    $scope.hide = !$scope.hide;
  }
$scope.user = 'NOT LOGGED IN';
  function getUser() {
      userService.getUser().then(function(user) {
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
