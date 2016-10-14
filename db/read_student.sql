SELECT username, id FROM students
WHERE classcode = $1 AND username = $2 AND password = $3;
