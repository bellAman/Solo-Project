INSERT INTO goals(name, endgoal, message, teacherid) VALUES($2, $3, $4, $1)
RETURNING goals.id;
