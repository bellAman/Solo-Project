SELECT DISTINCT goals.name, goals.id
FROM goals
JOIN progress ON goals.id = progress.goalid
WHERE progress.studentid = $1  AND progress.assigned = true;
