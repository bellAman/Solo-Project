UPDATE progress
SET assigned = false
WHERE goalid = $1 AND studentid = $2;
