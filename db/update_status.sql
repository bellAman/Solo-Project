UPDATE progress
SET status = $4
WHERE studentid = $1 AND goalid = $2 AND stepnumber = $3;
