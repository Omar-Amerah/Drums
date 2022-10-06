let  bd = document.querySelector(".BassDrum")
let  c = document.querySelector(".Crash")
let  ft = document.querySelector(".FloorTom")
let  hh = document.querySelector(".HiHat")
let  ht = document.querySelector(".HighTom")
let  mt = document.querySelector(".MediumTom")
let  r = document.querySelector(".Ride")
let  s = document.querySelector(".Snare")

bd.addEventListener("click", () =>
{
    let audio = new Audio('assets/bass-drum.wav');
    audio.play();
})
c.addEventListener("click", () =>
{
    let audio = new Audio('assets/crash.wav');
    audio.play();
})
ft.addEventListener("click", () =>
{
    let audio = new Audio('assets/floor-tom.wav');
    audio.play();
})
hh.addEventListener("click", () =>
{
    let audio = new Audio('assets/hi-hat.wav');
    audio.play();
})
ht.addEventListener("click", () =>
{
    let audio = new Audio('assets/high-tom.wav');
    audio.play();
})
mt.addEventListener("click", () =>
{
    let audio = new Audio('assets/medium-tom.wav');
    audio.play();
})
r.addEventListener("click", () =>
{
    let audio = new Audio('assets/ride.wav');
    audio.play();
})
s.addEventListener("click", () =>
{
    let audio = new Audio('assets/snare.wav');
    audio.play();
})