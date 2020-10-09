function showMessage_FirstBox() {
    
    var x = document.getElementById("reward_FirstBox");
    var y = document.getElementById("close_FirstBox");
    var z = document.getElementById("rewardText_FirstBox");

    if(x === null && z.textContent === null) {
        z.textContent = "¡You claimed all the rewards!"
    }else if(x.style.display === 'none' || x.style.display === '' || y.style.display === 'none' || y.style.display === '') {
        y.style.display = "block";
        x.style.display = "block";
    }
   
}

function showResult_FirstBox() {
    var x = document.getElementById("messageResult_FirstBox");
    x.textContent = "¡You already got this reward!"
}