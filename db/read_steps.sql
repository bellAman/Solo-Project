SELECT  progress.stepnumber, progress.status, progress.studentid
FROM progress
WHERE progress.goalid = $1 AND progress.studentid = $2;
