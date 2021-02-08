console.log("connected...")
/* Create an array of students scores
loop each value of arrays and post to webpage
each value of scores in array should post on a new line
Create a variable that displays number of students and print on webpage
Print number of studnets to webpage before grades on a new line 
*/

// Generates random numbers and assigns to scores array
let scores = [ ];
let scoresLength = 20; 
for ( let i = 0; i < scoresLength; i++) {
    scores.push(Math.floor(Math.random() * 100) + 1);
}
console.log(scores);

// Built the scorces string 
let main = '';
for ( let i = 0; i < scores.length; i++) {
    main += `Score: ${scores[i]} <br>`;
}

// Displays scores to the webpage
document.getElementById("output").innerHTML = main;
document.getElementById("output").innerHTML += `# of scores: ${scores.length}<br>`;

// Find highest and lowest number 
let lowest = 101
let highest = 0; 
for ( let i = 0; i < scores.length; i++)  {
    if(scores[i]>highest){highest = scores[i]}
    if(scores[i]<lowest){lowest = scores[i]}
}

// Displays scores to the webpage 
document.getElementById("output").innerHTML += `highest score: ${highest}<br>`;
document.getElementById("output").innerHTML += `lowest score: ${lowest}<br>`;

// Finds the total of the scores
let total = 0;
for ( let i = 0; i < scores.length; i++)  {
    total += scores[i]
}

// Calculate the average and display to webpage
let avg = total / scores.length; 
document.getElementById("output").innerHTML += `average score: ${avg}<br>`;

//Create an array to hold scores 70+
let seventyPlus = [];

//Loop through score array and pull out every 70+ score
for ( let i = 0; i < scores.length; i++)  {
    if (scores[i] > 70 ) {
        seventyPlus.push(scores[i]);
    }
}

//Display seventyPlus to the webpage 
document.getElementById("output").innerHTML += `The # of scores over 70: ${seventyPlus.length}<br>`;