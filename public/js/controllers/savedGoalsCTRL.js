angular.module('trackerApp').controller('savedGoalsCTRL', function($scope, teacherService){
  // $scope.test="savedGoalsCTRL ready"
    $scope.user= JSON.parse(localStorage.getItem("user"));
    $scope.getGoals = function(user){

      teacherService.getGoals(user).then(function(response){
      $scope.goals = response.data;
    })
  }
  $scope.getGoals($scope.user);

  $scope.assignGoal = function(id){
    teacherService.assignGoal(id).then(function(response){
      if (response.status === 200){
        alert('This goal has been assigned')
      }
    })
  }

  $scope.unassignGoal = function(id){
    teacherService.unassignGoal(id).then(function(response){
      if (response.status === 200){
        alert('This goal is not assigned to students')
      }
    })
  }

  $scope.deleteGoal = function(id){
    if (confirm('Are you sure you want to delete this? It will be permanent.')) {
       teacherService.deleteGoal(id).then(function(response){
         if(response.status === 200){
          alert('This goal has been deleted')
         }
      })
}


  }

});
