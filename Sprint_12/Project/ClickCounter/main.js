const clickBtn = document.querySelector("#clickBtn");
const totalClicks = document.querySelector("#totalClicks");
const resetBtn = document.querySelector("#resetBtn");
let count=0;

clickBtn.addEventListener("click",()=>{
    count++;
    totalClicks.innerText = count;
});

resetBtn.addEventListener("click",()=>{
    count = 0;
    totalClicks.innerHTML = count;
})

