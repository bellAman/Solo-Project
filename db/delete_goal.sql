DELETE FROM goals WHERE id = $1;
DELETE FROM progress WHERE progress.goalid = $1;
DELETE FROM steps WHERE steps.goalid = $1;
