SELECT progress.stepnumber, progress.status, steps.instruction
FROM progress
JOIN steps ON progress.goalid = steps.goalid AND progress.stepnumber = steps.stepnumber
WHERE progress.studentid = $1 AND progress.goalid = $2 AND progress.assigned = true;
