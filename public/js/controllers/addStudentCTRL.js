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

  $scope.addStudent = function(student){
    student.teacherId =$scope.user.id
    teacherService.addStudent(student).then(function(response){
      if(response.status === 200){
        $scope.getStudents($scope.user);
      }
    })
  }

  $scope.addGroup = function(group){
    group.teacherId =$scope.user.id
    teacherService.addGroup(group).then(function(response){
      if(response.status === 200){
        $scope.getGroups($scope.user);
      }
    })
  }

   $scope.makeCode = function(code){
     code.teacherId =$scope.user.id
     teacherService.makeCode(code).then(function(response){
       if(response.status === 200){
        alert('Your new code has been set for all students');
       }
   })
   }

   $scope.removeGroup = function(id, i){
     console.log(id);
     if (confirm('Are you sure you want to remove this group? It will be permanent.')) {
        teacherService.deleteGroup(id).then(function(response){
          if(response.status === 200){
            $scope.groups.splice(i, 1)
           alert('This goal has been deleted')
          }
       })
 }
   }

});
