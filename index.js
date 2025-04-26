// COUNTER PROGRAM

const decreaseBtn = document.getElementById(`decreaseBtn`);
const resetBtn = document.getElementById(`resetBtn`);
const increaseBtn = document.getElementById(`increaseBtn`);
const countLabel = document.getElementById(`countLabel`);
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    animateNumber();
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    animateNumber();
}

resetBtn.onclick = function(){
    count = 0; 
    countLabel.textContent = count;
    animateNumber();
}

function animateNumber() {
    countLabel.classList.add("animate");
    setTimeout(() => {
        countLabel.classList.remove("animate");
    }, 500);
}
