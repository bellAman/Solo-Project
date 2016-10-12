SELECT DISTINCT goals.name, goals.id
FROM goals
JOIN progress ON goals.id = progress.goalId
WHERE goals.teacherID = $1 AND progress.assigned = true;
