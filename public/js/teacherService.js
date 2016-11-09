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

  this.getSteps = function(id){
   var defer = $q.defer();
    $http({
      method:"GET",
      url:'/stepNums/'+ id
   }).then(function(response){
     defer.resolve(response.data);
   })
   return defer.promise;
  }

  this.getGroup = function(id){
   var defer = $q.defer();
    $http({
      method:"GET",
      url:'/group/'+ id
   }).then(function(response){
     defer.resolve(response.data);
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

  this.deleteGroup = function(id){
    return $http({
      method: 'DELETE',
      url: '/deleteGroup/' + id,
    })
  }

  this.addGoal = function(info){
    return $http({
      method: 'POST',
      url: '/goal',
      data: info
    }).then(function(res) {
      return res.data;
    }).catch(function(err) {
      console.log(err);
    })
  }

  this.addStep = function(step){
    return $http({
      method: 'POST',
      url: '/step',
      data: step
    }).then(function(res) {
      return res;
    }).catch(function(err) {
      console.log(err);
    })
  }

 this.addGoaltoProgress = function(goal){
   return $http({
     method: 'POST',
     url: '/progressGoal',
     data: goal
  }).then(function(res) {
     return res;
   }).catch(function(err) {
    console.log(err);
   })
 }

  this.getStudentsInGroup= function(id){
    var defer = $q.defer();
     $http({
       method:"GET",
       url:'/studentsInGroup/'+ id
    }).then(function(response){
      defer.resolve(response.data);
    })
    return defer.promise;
  }

  this.addStudent = function(student){
    return $http({
      method: 'POST',
      url: '/student',
      data: student
   }).then(function(res) {
      return res;
    }).catch(function(err) {
     console.log(err);
    })
  }

  this.addGroup = function(group){
    return $http({
      method: 'POST',
      url: '/group',
      data: group
   }).then(function(res) {
      return res;
    }).catch(function(err) {
     console.log(err);
    })
  }

  this.makeCode = function(code){
    return $http({
      method: 'PUT',
      url: '/code',
      data: code
   }).then(function(res) {
      return res;
    }).catch(function(err) {
     console.log(err);
    })
  }

  this.assignToGroup = function(sId, gId){
    return $http({
      method: 'POST',
      url: '/groupAssignment/'+ sId +'/'+ gId
   }).then(function(res) {
      return res;
    }).catch(function(err) {
     console.log(err);
    })
  }

  this.removeFromGroup = function(id){
    return $http({
      method: 'DELETE',
      url: '/deleteGroupAssignment/' + id,
    })
  }

  this.getStudentsByGoal = function(id){
   var defer = $q.defer();
    $http({
      method:"GET",
      url:'/goalsStudents/'+ id
   }).then(function(response){
     defer.resolve(response.data);
   })
   return defer.promise;
  }

  this.removeStudentFromGoal = function(sId, gId){
    return $http({
      method: 'DELETE',
      url: '/studentFromGoal/' + sId + '/' + gId,
    })
  }

  this.removeStep = function(num, gId){
    return $http({
      method: 'DELETE',
      url: '/step/' + gId + '/' + num,
    })
  }

  this.getOneGoal = function(id){
    return $http({
      method: 'GET',
      url: '/goal/' + id,
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  this.deleteStudent = function(id){
    return $http({
      method: 'DELETE',
      url: '/student/' + id,
    })
  }

  this.clearProgress = function(id){
    return $http({
      method: 'DELETE',
      url: '/clearProgress/' + id
    }).then(function(res) {
      return res;
    })
    .catch(function(err) {
      console.log(err);
    })
  }

});
