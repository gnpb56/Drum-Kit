

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // var val = document.querySelectorAll(".drum")[i];
        var s = this.innerText;
        makeSound(s);
        buttonAnimation(s);
    });
}



document.addEventListener("keydown",function (event) {
    makeSound(event.key);
    buttonAnimation(event.key)
})
function buttonAnimation(s){
    var dc = document.querySelector("."+s);
    dc.classList.add("pressed");  
    setTimeout(function (){
        dc.classList.remove("pressed");
    }, 100);  
}
function makeSound(s){
    switch (s) {
        case 'w':
            var sounds = new Audio("sounds/tom-1.mp3");
            sounds.play();
            break;
        case 'a':
            var sounds = new Audio("sounds/tom-2.mp3");
            sounds.play();
            break;
        case 's':
            var sounds = new Audio("sounds/tom-3.mp3");
            sounds.play();
            break;
        case 'd':
            var sounds = new Audio("sounds/tom-4.mp3");
            sounds.play();
            break;
        case 'j':
            var sounds = new Audio("sounds/snare.mp3");
            sounds.play();
            break;
        case 'k':
            var sounds = new Audio("sounds/crash.mp3");
            sounds.play();
            break;
        case 'l':
            var sounds = new Audio("sounds/kick-bass.mp3");
            sounds.play();
            break;
        default:
            break;
    }
    
}

// var sounds = new Audio("sounds/crash.mp3");
//         sounds.play();