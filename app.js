setInterval(myfun, 1000);

function myfun() {
    let date = new Date(); 
    let hours = date.getHours ();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").innerHTML = time;    
}