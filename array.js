console.log("connected...")
/* Create an array of students scores
loop each value of arrays and post to webpage
each value of scores in array should post on a new line
Create a variable that displays number of students and print on webpage
Print number of studnets to webpage before grades on a new line 
*/

let scores = [ ];
let scoresLength = 20; 
for ( let i = 0; i < scoresLength; i++) {
    scores.push(Math.floor(Math.random() * 100) + 1);
}
console.log(scores);


let main = '';
for ( let i = 0; i < scores.length; i++) {
    main += `Score: ${scores[i]} <br>`;
}

document.getElementById("output").innerHTML = main;
document.getElementById("output").innerHTML += `# of scores: ${scores.length}<br>`;

/* define highest and lowest number*/
let lowest = 101
let highest = 0; 
for ( let i = 0; i < scores.length; i++)  {
    if(scores[i]>highest){highest = scores[i]}
    if(scores[i]<lowest){lowest = scores[i]}
}
document.getElementById("output").innerHTML += `highest score: ${highest}<br>`;
document.getElementById("output").innerHTML += `lowest score: ${lowest}<br>`;