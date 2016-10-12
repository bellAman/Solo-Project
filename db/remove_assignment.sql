UPDATE progress
SET assigned = false
WHERE progress.goalid = $1;
