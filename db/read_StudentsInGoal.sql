SELECT DISTINCT progress.studentID, students.username
FROM progress
JOIN students ON students.ID = progress.studentID
WHERE progress.goalId = $1 AND progress.assigned = true;
