SELECT students.username, progress.status, progress.stepNumber
FROM progress
JOIN students ON students.ID = progress.studentID
WHERE progress.goalID = $1;
