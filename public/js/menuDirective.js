angular.module("trackerApp").directive("menu", function(){
   return {
     restrict: "AE",
     templateUrl: "./templates/menuHeader.html",
     scope:{ },
     link: function($scope, element, attrs){
       element.on('click', function revealer(){
         $scope.show = !$scope.show;
         $scope.hide = !$scope.hide;
       })
     }
   }
 });
