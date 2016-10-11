var app = require('./server');
var db = app.get('db');
module.exports = {
  getGoals:function(req, res) {
    db.read_allGoals([req.params.teacherID],function(err, ids) {
      res.status(200).json(ids)
    });
  },
  getStudents:function(req, res){
    db.read_StudentsInGoal([req.params.id], function(err, students){
      res.status(200).json(students)
    })
  },
  getSteps: function(req, res){
    db.read_steps([req.params.id, req.params.sId], function(err, steps){
      res.status(200).json(steps)
    })
  }
}
