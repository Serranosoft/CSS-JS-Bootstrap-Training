function showMessage_FirstBox() {
    
    var x = document.getElementById("reward_FirstBox");
    var y = document.getElementById("close_FirstBox");
    var z = document.getElementById("rewardText_FirstBox");

    if(x === null && z.textContent === null) {
        z.textContent = "¡You claimed all the rewards!"
    }else if(x.style.display === 'none' || x.style.display === '' || y.style.display === 'none' || y.style.display === '') {
        y.style.display = "block";
        x.style.display = "block";
        $('.box1').css("height", "190");
    }
   
}

function showResult_FirstBox() {
    var x = document.getElementById("messageResult_FirstBox");
    x.textContent = "¡You already got this reward!"
    $('.box1').css("height", "150");
}

function showPatchNotes() {

    var x = document.getElementById("patchNotes_SecondBox");
    if(x.style.display === 'none' || x.style.display === '') {
        $('#patchNotes_SecondBox').css("display", "block");
        $('#closePatchNotes').css("display", "block");
    }
}

function closePatchNotes() {
    $("#patchNotes_SecondBox").css("display","none");
    $("#closePatchNotes").css("display", "none");
}

function changeBackgroundToWhite() {

    $('#box3 h3').css("color", "black");
    $('#box3').css("background-color", "white");
}

function changeBackgroundToDark() {
    
    $('#box3 h3').css("color", "white");
    $('#box3').css("background-color", "black");

    /* this could be done without Jquery by this way
    var x = document.getElementById('box3');
    var y = document.getElementById('options_thirdBox');
    x.setAttribute('style', 'background-color:black');*/

}