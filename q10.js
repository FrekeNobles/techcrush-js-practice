// FUNCTIONS AND MAPPING THROUGH AN ARRAY OF OBJECTS

function gradeScore(score) {
    if (score >= 70) return "A";
    else if (score >= 60) return "B";
    else if (score >= 50) return "C";
    else if (score >= 40) return "D";
    else return "F";
}

function summarizeStudent(students) {
    return students.map(student => {
        return `${student.name} scored ${student.score} - Grade: ${gradeScore(student.score)}`;
    });
}

let students = [
    { name: "Amara", score: 34 },
    { name: "Noble", score: 85 },
    { name: "Esther", score: 94 },
    { name: "Iti", score: 4 },
    { name: "Paul", score: 54 },
];

console.log(summarizeStudent(students));