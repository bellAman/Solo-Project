angular.module('trackerApp').service('monitoringService', function($http,$q){
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

   this.getStudents = function(id){
     var defer = $q.defer();
       $http({
         method:"GET",
         url:'/students/'+ id
      }).then(function(response){

        defer.resolve(response);
      })
      return defer.promise;
    }

    this.getSteps = function(id, sId){
      var defer = $q.defer();
        $http({
          method:"GET",
          url:'/steps/'+ id + '/' + sId
       }).then(function(response){

         defer.resolve(response.data);
       })
       return defer.promise;
     }
});
