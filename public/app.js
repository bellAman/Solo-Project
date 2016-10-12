angular.module('trackerApp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("teacherLogin",{
    url: "/teacher",
    templateUrl:"./templates/teacherLogin.html",
    controller:"teacherLoginCTRL"
  })
  .state("teacherHome",{
    url: "/teacher/home",
    templateUrl:"./templates/teacherHome.html",
    controller:"teacherHomeCTRL"
  })
  .state("addStudents",{
    url: "/teacher/addStudents",
    templateUrl:"./templates/addStudents.html",
    controller:"addStudentCTRL"
  })
  .state("createGoals",{
    url: "/teacher/createGoals",
    templateUrl:"./templates/createGoals.html",
    controller:"createGoalsCTRL"
  })
  .state("editGoals",{
    url: "/teacher/editGoals/:id",
    templateUrl:"./templates/editGoals.html",
    controller:"editGoalsCTRL"
  })
  .state("monitoring",{
    url: "/teacher/monitoring",
    templateUrl:"./templates/monitoring.html",
    controller:"monitoringCTRL"
  })
  .state("savedGoals",{
    url: "/teacher/savedGoals",
    templateUrl:"./templates/savedGoals.html",
    controller:"savedGoalsCTRL"
  })
  .state("studentLogin",{
    url: "/student",
    templateUrl:"./templates/studentLogin.html",
    controller:"studentLoginCTRL"
  })
  .state("studentHome",{
    url: "/student/home",
    templateUrl:"./templates/studentHome.html",
    controller:"studentHomeCTRL"
  })
  .state("progress",{
    url: "/student/progress",
    templateUrl:"./templates/progress.html",
    controller:"progressCTRL"
  })

  })
