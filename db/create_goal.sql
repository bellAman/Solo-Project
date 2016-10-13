INSERT INTO goals(name, endgoal, message, teacherid) VALUES($1, $2, $3, $4)
RETURNING goals.id;
