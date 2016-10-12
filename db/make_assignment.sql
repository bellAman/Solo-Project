UPDATE progress
SET assigned = true
WHERE progress.goalid = $1;
