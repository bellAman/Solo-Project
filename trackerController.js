var app = require('./server');
 var db = app.get('db');
module.exports = {

  getUsers:function(req, res) {
    db.read_users(function(err, users) {
      res.status(200).json(users)
    });
  },
  makeUser:function(req, res) {
    db.create_user([req.body.firstname, req.body.lastname, req.body.email, req.body.password], function(err, user) {
      res.status(200).json(user)
    });
  },

  getStatus: function(req, res){
    db.read_studentsByGoal([req.params.goalID],function(err, status){
      console.log(res);
      res.status(200).json(status)
    });
  },

  getGroups: function(req, res){
    db.read_groups([req.params.teacherID],function(err, groups){
      res.status(200).json(groups)
    });
  },

  // getAssignments: function(req, res){
  //   db.read_assignedGoals([req.params.studentID],function(err, assignments){
  //     res.status(200).json(assignments)
  //   });
  // },

  // getOneGoal: function(req, res){
  //   db.read_goal([req.params.id],function(err, goal){
  //     res.status(200).json(goal)
  //   });
  // },

  getSteps: function(req, res){
    db.read_steps([req.params.studentID],function(err, steps){
      res.status(200).json(steps)
    });
  },

  // getGroupAssignments: function(req, res){
  //   db.read_groupAssignments([req.params.teacherID],function(err, groupAssignments){
  //     res.status(200).json(groupAssignments)
  //   });
  // },

  getGoals: function(req, res){
    db.read_allGoals([req.params.teacherID],function(err, goals){
      res.status(200).json(goals)
    });
  },

  getStudents: function(req, res){
    db.read_allStudents([req.params.teacherID],function(err, students){
      res.status(200).json(students)
    });
  },

  makeAssignment: function(req, res){
    db.make_assignment([req.params.id],function(err, assignment){
      res.status(200).json(assignment)
    });
  },

  removeAssignment: function(req, res){
    db.remove_assignment([req.params.id],function(err, assignment){
      res.status(200).json(assignment)
    });
  },

  deleteGoal: function(req, res){
    db.delete_goal([req.params.id],function(err, goal){
      res.status(200).json(goal)
    });
  },

  makeGoal:function(req, res) {
    db.create_Goal([req.body.name, req.body.endgoal, req.body.message, req.params.id], function(err, goal) {
      res.status(200).json(goal)
    });
  },

};
