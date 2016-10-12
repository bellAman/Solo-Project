angular.module('trackerApp').service('teacherService', function($http,$q){
   this.getGoals = function(user){
     var id = user.id
    var defer = $q.defer();
     $http({
       method:"GET",
       url:'/goals/'+ id
    }).then(function(response){
      defer.resolve(response);
    })
    return defer.promise;
  }

  this.getMyGroups = function(user){
    var id = user.id
   var defer = $q.defer();
    $http({
      method:"GET",
      url:'/groups/'+ id
   }).then(function(response){
     console.log(response);
     defer.resolve(response);
   })
   return defer.promise;
  }

  this.assignGoal = function(id){
    return $http({
      method: 'PUT',
      url: '/makeAssignment/' + id,
    })
  }

  this.unassignGoal = function(id){
    return $http({
      method: 'PUT',
      url: '/removeAssignment/' + id,
    })
  }
});
