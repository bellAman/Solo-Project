SELECT progress.stepNumber, progress.status, steps.instruction
FROM steps
JOIN progress ON steps.stepNumber = progress.stepNumber
WHERE progress.studentID = $1 AND  steps.goalId = progress.goalID;
