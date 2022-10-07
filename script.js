let  bd = document.querySelector(".BassDrum")
let  c = document.querySelector(".Crash")
let  ft = document.querySelector(".FloorTom")
let  hh = document.querySelector(".HiHat")
let  ht = document.querySelector(".HighTom")
let  mt = document.querySelector(".MediumTom")
let  r = document.querySelector(".Ride")
let  s = document.querySelector(".Snare")
let sticks = document.querySelector(".sticks")
let bod = document.querySelector("body")

bd.addEventListener("click", () =>
{
    let audio = new Audio('assets/bass-drum.wav');
    audio.play();
})
c.addEventListener("click", () =>
{
    sticks.style.transform= "rotate(0deg)";
    sticks.style.top=5+ "%";  
    sticks.style.left=40+ "%";  
    let audio = new Audio('assets/crash.wav');
    audio.play();
})
ft.addEventListener("click", () =>
{
    sticks.style.transform= "rotate(310deg)";
    sticks.style.top=22 + "%";  
    sticks.style.left=25 + "%";
    let audio = new Audio('assets/floor-tom.wav');
    audio.play();
})
hh.addEventListener("click", () =>
{
    sticks.style.transform= "rotate(220deg)";
    sticks.style.top=17 + "%";  
    sticks.style.left=64 + "%";
    let audio = new Audio('assets/hi-hat.wav');
    audio.play();
})
ht.addEventListener("click", () =>
{
    sticks.style.transform= "rotate(270deg)";
    sticks.style.top=13 + "%";  
    sticks.style.left=50 + "%";
    let audio = new Audio('assets/high-tom.wav');
    audio.play();
})
mt.addEventListener("click", () =>
{
    sticks.style.transform= "rotate(310deg)";
    sticks.style.top=13 + "%";  
    sticks.style.left=40 + "%";
    let audio = new Audio('assets/medium-tom.wav');
    audio.play();
})
r.addEventListener("click", () =>
{
    sticks.style.transform= "rotate(200deg)";
    sticks.style.top=7 + "%";  
    sticks.style.left=50 + "%";
    let audio = new Audio('assets/ride.wav');
    audio.play();
})
s.addEventListener("click", () =>
{
    sticks.style.transform= "rotate(280deg)";
    sticks.style.top=23 + "%";  
    sticks.style.left=62 + "%";
    let audio = new Audio('assets/snare.wav');
    audio.play();
})









document.addEventListener("keyup", (event) =>
 {
    if (event.keyCode === 65) {
        let audio = new Audio('assets/bass-drum.wav');
        audio.play();
    }
    if (event.keyCode === 83) {
        sticks.style.transform= "rotate(0deg)";
        sticks.style.top=5+ "%";  
        sticks.style.left=40+ "%"; 
        let audio = new Audio('assets/crash.wav');
        audio.play();
    }
    if (event.keyCode === 68) {
        sticks.style.transform= "rotate(310deg)";
        sticks.style.top=22 + "%";  
        sticks.style.left=25 + "%";
        let audio = new Audio('assets/floor-tom.wav');
        audio.play();
    }
    if (event.keyCode === 70) {
        sticks.style.transform= "rotate(220deg)";
        sticks.style.top=17 + "%";  
        sticks.style.left=64 + "%";
        let audio = new Audio('assets/hi-hat.wav');
        audio.play();
    }
    if (event.keyCode === 71) {
        sticks.style.transform= "rotate(270deg)";
        sticks.style.top=13 + "%";  
        sticks.style.left=50 + "%";
        let audio = new Audio('assets/high-tom.wav');
        audio.play();
    }
    if (event.keyCode === 72) {
        sticks.style.transform= "rotate(310deg)";
        sticks.style.top=13 + "%";  
        sticks.style.left=40 + "%";
        let audio = new Audio('assets/medium-tom.wav');
        audio.play();
    }
    if (event.keyCode === 74) {
        sticks.style.transform= "rotate(200deg)";
        sticks.style.top=7 + "%";  
        sticks.style.left=50 + "%";
        let audio = new Audio('assets/ride.wav');
        audio.play();
    }
    if (event.keyCode === 75) {
        sticks.style.transform= "rotate(280deg)";
        sticks.style.top=23 + "%";  
        sticks.style.left=62 + "%";
        let audio = new Audio('assets/bass-drum.wav');
        audio.play();
    }
});