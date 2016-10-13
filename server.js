var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://postgres:pixidust@localhost/Tracker';
var massiveInstance = massive.connectSync({connectionString: connectionString});
var config = require('./config.json');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = module.exports = express();

app.set('db', massiveInstance);
var trackerCtrl = require('./trackerController');
var monitorCtrl = require('./backMonitorController');
var db = app.get('db');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(cors(corsOptions));
var corsOptions = {
  origin: 'http://localhost:8775'
}
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('I ran');
    db.getUserByEmail([username], function(err, user) {
      console.log(user);
      user = user[0];
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password != password) { return done(null, false); }
      return done(null, user);
    })
  }
))
passport.serializeUser(function(user, done){
  done(null, user.id);
})

passport.deserializeUser(function(id, done){
  db.getUserById([id], function(err, user){
    user = user[0];
    if (err) console.log(err);
    else console.log('RETRIEVED USER');
    console.log(user);
    done(null, user);
  })
})
app.post('/auth/local',
passport.authenticate('local',{failureRedirect: '/#/teacher' } ), function(req, res) {
    res.redirect('/#/teacher/home')

});

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  res.status(200).send(req.user);
})
app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

app.post('/user', trackerCtrl.makeUser)
app.post('/goal/:id', trackerCtrl.makeGoal)

app.get('/myStudents/:teacherID', trackerCtrl.getStudents)
app.get('/goals/:teacherID', trackerCtrl.getGoals);
app.get('/goalsStudents/:goalID', trackerCtrl.getStatus);
app.get('/groups/:teacherID', trackerCtrl.getGroups);
// app.get('/assignedGoals/:studentID', trackerCtrl.getAssignments);
// app.get('/goal/:id', trackerCtrl.getOneGoal);
app.get('/steps/:studentID', trackerCtrl.getSteps);
// app.get('/groupAssignments/:teacherID', trackerCtrl.getGroupAssignments);
app.get('/assignedgoals/:teacherID', monitorCtrl.getGoals);
app.get('/steps/:id/:sId', monitorCtrl.getSteps);
app.get('/students/:id', monitorCtrl.getStudents);


app.put('/makeAssignment/:id', trackerCtrl.makeAssignment)
app.put('/removeAssignment/:id', trackerCtrl.removeAssignment)

app.delete('/deleteGoal/:id', trackerCtrl.deleteGoal)

app.listen(config.port, function(){
  console.log("listening on port " + config.port);
})
