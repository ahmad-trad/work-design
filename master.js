let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let mineuts = document.querySelector('.mineuts');
let sceand = document.querySelector('.sceand');

let detaBefor = new Date("Dec 31, 2023 23:59:59").getTime();

let count = setInterval(() =>{
    //date now
    let dateNow = new Date().getTime();
    //dif time
    let difTime = detaBefor - dateNow;

    //day
    let day = Math.floor(difTime / (1000 * 60 * 60 * 24));
    //hours
    let hour = Math.floor(difTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    //minets
    let minet = Math.floor(difTime % (1000 * 60 * 60 ) / (1000 * 60 ));
    //secand
    let secan =  Math.floor(difTime % (1000 * 60 ) / (1000));

    //inner html
    days.innerHTML = day;
    hours.innerHTML = hour < 10 ? `0${hour}` : hour ;
    mineuts.innerHTML = minet < 10 ? `0${minet}` : minet;
    sceand.innerHTML = secan < 10 ? `0${secan}`: secan;

}, 1000)