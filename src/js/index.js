window.addEventListener('DOMContentLoaded', function(){

    // global vars
    
    const box3 = document.getElementById("box3");
    
    // FIRST BOX

    document.getElementById("get_reward_box1").addEventListener('click', function(){
        var x = document.getElementById("reward_box1");
        var y = document.getElementById("close_box1");
        var z = document.getElementById("messageResult_FirstBox");

        ShowAndHideContent(x, y);

        y.addEventListener("click", function() {
            z.textContent = "You've claimed all the rewards available";
        })
    });

    // THIRD BOX

    var box3_h3 = document.querySelector("#box3 h3");

    document.getElementById("whiteBox3").addEventListener("click", function() {
        box3.setAttribute("style", "background-color: white");
        box3_h3.setAttribute("style", "color: black");
    })

    document.getElementById("darkBox3").addEventListener("click", function() {
        box3.setAttribute("style", "background-color: black");
        box3_h3.setAttribute("style", "color: white");
    })


    // FOURTH BOX

    document.getElementById("email_Box4").addEventListener('keydown', function() {
        var e = window.event || e;
        var key = e.keyCode;
        //space pressed
        if (key == 32) { //key 32 is the space
        e.preventDefault();
        }
    })
    
    document.getElementById("submit_Box4").addEventListener("click", function(){
        var email = document.getElementById("email_Box4").value;
        var domain = document.getElementById("chooseEmailDomain").options[document.getElementById("chooseEmailDomain").selectedIndex].value;

        document.getElementById("emailInfo_Box4").setAttribute("style", "display: block");

        if(email.length < 5) {
            document.getElementById("emailSent_Box4").innerHTML = "You've to write an email to subscribe"
        }else {
            document.getElementById("emailSent_Box4").innerHTML = `You've subscribed with ${email}@${domain} `
        }  
        
    })
    

});