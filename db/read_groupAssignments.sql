SELECT groups.id, groups.name, students.username, students.id
FROM groups
JOIN groupAssignments ON groups.id = groupAssignments.groupId
JOIN students ON students.id = groupAssignments.studentId
WHERE groups.teacherId = $1;
