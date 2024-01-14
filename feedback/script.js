function playSound(audioName){
    let audio=new Audio(audioName);
    audio.loop=true;
    audio.play();
}
playSound("1-05 Mishiro Town.mp3");

function SendMail() {
    var params={ 
    from_name: document.getElementById("fullName").value, 
    email_id:document.getElementById("email_id").value,
    message: document.getElementById("message").value
    }
    emailjs.send("service_768jpxk", "7vr1Rc8fK7l-PQGlj", params).then(function (res) {
         alert("Success!" + res.status);
})
    }