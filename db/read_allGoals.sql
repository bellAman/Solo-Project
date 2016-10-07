SELECT goals.name, goals.id
FROM goals
WHERE goals.teacherID = $1;
