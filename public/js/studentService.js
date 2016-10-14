angular.module('trackerApp').service('studentService', function($http){
  this.getStudent = function(student) {
    return $http({
      method: 'POST',
      url: '/auth/student',
      data: student
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  this.getGoals = function(id){
    return $http({
      method: 'GET',
      url: '/studentgoals/' + id,
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log(err);
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

  this.getSteps = function(sId, gId){
    return $http({
      method: 'GET',
      url: '/mySteps/' + sId + '/' + gId,
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  this.changeStatus = function(newStatus){
    return $http({
      method: 'PUT',
      url: '/status',
      data: newStatus
    })
    .then(function(res) {
      return res;
    })
    .catch(function(err) {
      console.log(err);
    })
  }

});
