SELECT DISTINCT students.username, students.ID
FROM progress
JOIN students ON students.ID = progress.studentID
WHERE progress.goalID = $1 ;
