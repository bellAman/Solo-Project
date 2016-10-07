SELECT DISTINCT goals.name, progress.goalID
FROM progress
JOIN goals ON goals.Id = progress.goalID
WHERE progress.studentId = $1 AND progress.assigned = true;
