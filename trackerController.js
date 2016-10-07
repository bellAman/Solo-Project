var app = require('./server');
 var db = app.get('db');
module.exports = {

  getUsers:function(req, res) {
    db.read_users(function(err, users) {
      res.status(200).json(users)
    });
  },

  getStatus: function(req, res){
    db.read_status([req.params.goalID],function(err, status){
      res.status(200).json(status)
    });
  },

  getGroups: function(req, res){
    db.read_groups([req.params.teacherID],function(err, groups){
      res.status(200).json(groups)
    });
  },

  getAssignments: function(req, res){
    db.read_assignedGoals([req.params.studentID],function(err, assignments){
      res.status(200).json(assignments)
    });
  },

  getOneGoal: function(req, res){
    db.read_goal([req.params.id],function(err, goal){
      res.status(200).json(goal)
    });
  },

  getSteps: function(req, res){
    db.read_steps([req.params.studentID],function(err, steps){
      res.status(200).json(steps)
    });
  },

  getGroupAssignments: function(req, res){
    db.read_groupAssignments([req.params.teacherID],function(err, groupAssignments){
      res.status(200).json(groupAssignments)
    });
  },

  getGoals: function(req, res){
    db.read_allGoals([req.params.teacherID],function(err, goals){
      res.status(200).json(goals)
    });
  },

}
