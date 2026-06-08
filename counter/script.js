
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const displayCounter = document.getElementById("displayCounter");
const oddEven = document.getElementById("oddEven");
const substract = document.getElementById("substract");
const add = document.getElementById("add");
const TotalClick = document.getElementById("totalClick");


let count = 0;
let total = 0;

function totalClick(){
    total++;
    TotalClick.textContent = total;
}
function textColor(){
    if(count == 0){
        displayCounter.style.color = "red";
    }else if(count > 0){
        displayCounter.style.color = "green"
    }
}
function display(){
    displayCounter.textContent = count;
}
function OddEven(){
    if(count %2 == 0 ){
        oddEven.textContent = "Even";
    }else {
        oddEven.textContent = "Odd"
    }
}

decreaseBtn.addEventListener("click", function(){
    console.log("click kiya");
    if(count > 0){
        count--;
    }
    display();
    OddEven();
    textColor();
    totalClick();
    
})
substract.addEventListener("click", function(){
    if(count-5 <  0){
        count = count;
    }else {
        count = count - 5;
    }
    display();
    OddEven();
    textColor();
    totalClick();
})


resetBtn.addEventListener("click", function(){
    console.log("click kiya");
    count = 0;
    display();
    OddEven();
    textColor();
    totalClick();
    
})

add.addEventListener("click", function(){
    count = count + 5;
    display();
    OddEven();
    textColor();
    totalClick();
})
increaseBtn.addEventListener("click", function(){
    console.log("click kiya");
    count++;
    display();
    OddEven();
    textColor();
    totalClick();
})