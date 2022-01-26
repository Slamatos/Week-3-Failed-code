// for the assignment we need a timer to count down from 50 to 0 in 5 second increments and show "blastoff" at 0
// for my example we are going to count down from 20 to 0 in 2 second increments and show "blastoff" at 0
function blastOffTimer(){
    console.log(blastOffTimer() started);
    var currTime = 20;
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log("20");
    currTime = currTime -2
    setTimeout(func(){
console.log("18");
    }, 2000)
}
