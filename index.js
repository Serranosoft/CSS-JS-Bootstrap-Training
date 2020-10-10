window.addEventListener('DOMContentLoaded', function(){

    // FIRST BOX

    document.getElementById("get_reward_box1").addEventListener('click', function(){
        var x = document.getElementById("reward_box1");
        var y = document.getElementById("close_box1");
        var z = document.getElementById("messageResult_FirstBox");

        ShowAndHideContent(x, y);
        $('.box1').css("height", "190");

        y.addEventListener("click", function() {
            z.textContent = "You've claimed all the rewards available";
            $('.box1').css("height", "150");
        })
    });


    // SECOND BOX

    document.getElementById("updateTextBox2").addEventListener("click", function(){

        var x = document.getElementById("patchNotesBox2");
        var y = document.getElementById("closePatchNotes");
        ShowAndHideContent(x, y);
    });

    document.getElementById("closePatchNotes").addEventListener("click", function() {
        var x = document.getElementById("patchNotesBox2");
        var y = document.getElementById("closePatchNotes");
        ShowAndHideContent(x, y)
    });

    // THIRD BOX
    
    var box3 = document.getElementById("box3");
    var box3_h3 = document.querySelector("#box3 h3");

    document.getElementById("whiteBox3").addEventListener("click", function() {
        box3.setAttribute("style", "background-color: white");
        box3_h3.setAttribute("style", "color: black");
    })

    document.getElementById("darkBox3").addEventListener("click", function() {
        box3.setAttribute("style", "background-color: black");
        box3_h3.setAttribute("style", "color: white");
    })


});
    
    /*$(function(){
    
        $('#chooseEmailOption').on('click', '.dropdown-item', function() {
            alert('AAA');
            $('#emailOptionButton').text($(this).text());
        });
    });*/




/*function showMessage_FirstBox() {
    
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
   
}*/

