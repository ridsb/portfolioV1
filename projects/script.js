function playSound(audioName){
    let audio=new Audio(audioName);
    audio.loop=true;
    audio.play();
}
playSound("103 Yoshi's Island.mp3");