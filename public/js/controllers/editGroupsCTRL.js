angular.module('trackerApp').controller('editGroupsCTRL',function($scope, teacherService, $state){
  //$scope.test ="Are you ready"
  $scope.user= JSON.parse(localStorage.getItem("user"));
  function logincheck(){
    if(!$scope.user){
      $state.go('teacherLogin')
    }
  }
  logincheck()
  $scope.getStudents = function(user){
    teacherService.getMyStudents(user).then(function(response){
    $scope.students = response.data;
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

 var studentid= [];
 $scope.idCheck = function(id){
 if(document.getElementById("checkbox").click){
    var index = studentid.indexOf(id)
      if(index !== -1){
      studentid.splice(index, 1)
      }
      else{
      studentid.push(id)
    }
 }
 $scope.studentIds = studentid
 }

  $scope.assignToGroup = function(){
  for(var i = 0; i < $scope.studentIds.length; i++){
    var sId = $scope.studentIds[i]
    var gId = parseInt($state.params.id)
    teacherService.assignToGroup(sId, gId).then(function(response){
      if(response.status === 200){
        $scope.getMembers($state.params.id)
      }
     })
  }
  }

  $scope.removeFromGroup = function(id){
    teacherService.removeFromGroup(id).then(function(response){
      if(response.status === 200){
        $scope.getMembers($state.params.id)
      }
    })
  }


});
