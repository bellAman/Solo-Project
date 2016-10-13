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
     defer.resolve(response);
   })
   return defer.promise;
  }
  this.getMyStudents = function(user){
    var id = user.id
   var defer = $q.defer();
    $http({
      method:"GET",
      url:'/myStudents/'+ id
   }).then(function(response){
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

  this.deleteGoal = function(id){
    return $http({
      method: 'DELETE',
      url: '/deleteGoal/' + id,
    })
  }

  this.addGoal = function(info, id){
    return $http({
      method: 'POST',
      url: '/goal/:id',
      data: info
    }).then(function(res) {
      return res.data;
    }).catch(function(err) {
      console.log(err);
    })

  }




});
