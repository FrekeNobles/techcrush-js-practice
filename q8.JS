// conditionals

function gradeScore(score) {
    if (score >= 70) return "A";
    else if (score >= 60) return "B";
    else if (score >= 50) return "C";
    else if (score >= 40) return "D";
    else return "F";
}

let studentScores = [85, 62, 45, 30, 55, 40];

// I'm using for...of loop to loop through the studentScores array
for (let score of studentScores) { 
    //console.log(gradeScore(score))
    console.log(`Score: ${score} → Grade: ${gradeScore(score)}`); //I used template literals to match the score to the grade
}