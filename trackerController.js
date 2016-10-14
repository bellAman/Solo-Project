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

  getStepNums: function(req, res){
    db.read_stepNums([req.params.id],function(err, stepnums){
      res.status(200).json(stepnums)
    });
  },

  getStudentsInGroup: function(req, res){
    db.read_studentsInGroup([req.params.id],function(err, students){
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
    db.delete_goalFromProgress([req.params.id], function(err){
      if(err){
        res.status(402).json(err)
      }
      else{
      db.delete_goalFromSteps([req.params.id], function(err){
        if(err){
          res.status(402).json(err)
        }
        else{
        db.delete_goalFromGoal([req.params.id],function(err, goal){
          if(err){
            res.status(402).json(err)
          }
          else{
            res.status(200).json(goal)
          }
        })
      }
    })
  }
 })
},

deleteGoal: function(req, res){
    db.delete_groupFromAssignment([req.params.id], function(err){
      if(err){
        res.status(402).json(err)
      }
      else{
      db.delete_groupFromGroup([req.params.id],function(err, goal){
        if(err){
          res.status(402).json(err)
        }
        else{
          res.status(200).json(goal)
        }
      })
    }
  })

},


  makeGoal:function(req, res) {
    db.create_goal([req.body.id, req.body.name, req.body.endgoal, req.body.message], function(err, goal) {
      res.status(200).json(goal)
    });
  },

  makeStep:function(req, res) {
    db.create_step([req.body.number, req.body.instruction, req.body.id], function(err, step) {
      res.status(200).json(step)
    });
  },

  makeProgressGoal:function(req, res) {
    db.create_progressGoal([req.body.stepnum, req.body.student, req.body.goalId], function(err, pStep) {
      res.status(200).json(pStep)
    });
  },

  makeStudent:function(req, res) {
    db.create_student([req.body.username, req.body.password, req.body.teacherId], function(err, step) {
      res.status(200).json(step)
    });
  },

  makeGroup:function(req, res) {
    db.create_group([req.body.name, req.body.teacherId], function(err, step) {
      res.status(200).json(step)
    });
  },

  makeCode:function(req, res) {
    db.make_code([req.body.code, req.body.teacherId], function(err, code) {
      res.status(200).json(code)
    });
  },


  getGroup: function(req, res){
    db.read_group([req.params.id],function(err, group){
      res.status(200).json(group)
    });
  },

  checkStudent:function(req, res) {
    db.read_student([req.body.classcode, req.body.username, req.body.password], function(err, step) {
      if(err){
        res.status(400).json(err)
      }
      res.status(200).json(step)
    });
  },

  getStudentGoals: function(req, res){
    db.read_studentgoals([req.params.id],function(err, goals){
      res.status(200).json(goals)
    });
  },

  getOneGoal: function(req, res){
    db.read_goal([req.params.id],function(err, goals){
      res.status(200).json(goals)
    });
  },

  getMySteps: function(req, res){
    db.read_mySteps([req.params.sId, req.params.gId], function(err, steps){
      if(err){
        res.status(400).json(err);
      }
      res.status(200).json(steps)
    })
  },

  changeStatus: function(req, res){
    db.update_status([req.body.studentId, req.body.goalId, req.body.stepnum, req.body.status],function(err, status){
      if(err){
        res.statu(400).json(err)
      }
      res.status(200).json(status)
    });
  },

};
