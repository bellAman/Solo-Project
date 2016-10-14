SELECT groupAssignments.studentid, students.username
FROM groupAssignments
JOIN students on students.id = groupAssignments.studentid
WHERE groupid = $1;
