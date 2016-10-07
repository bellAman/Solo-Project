angular.module('trackerApp').controller('addStudentCTRL',function($scope){
  //  $scope.test = "add contoller ready"
  $scope.addStudentRevealer = function(){
    $scope.hide = !$scope.hide;
  }
  // $scope.longFormRevealer = function(){
  //   $scope.show = !$scope.show;
  //   $scope.hide = !$scope.hide;
  // }
  $scope.studentMessage = function(){
    alert('Student Saved');
  }
  $scope.groupMessage = function(){
    alert('Group Saved');
  }
  $scope.codeMessage = function(){
    alert('code updated');
  }
  $scope.groupRevealer = function(){
     $scope.see = !$scope.see;
  }

  $scope.numbers = new Array();
  $scope.makeInput = function(){
    console.log($scope.numInput);
    var x = $scope.numInput;
    for(var i = 0; i < x; i++){
      $scope.numbers.push(i);
    }
  //   alert('Goal Saved');
   }
})
