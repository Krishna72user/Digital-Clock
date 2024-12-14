setInterval(()=>{
    let Dt = new Date();
    let hours = Dt.getHours();
    let min = Dt.getMinutes();
    let sec = Dt.getSeconds();
    document.querySelector(".hours").innerText = hours;
    document.querySelector(".minutes").innerText = min;
    document.querySelector(".seconds").innerText = sec;
},1)
