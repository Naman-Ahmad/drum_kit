var no_letter= document.querySelectorAll(".drum").length;
for (i=0; i<no_letter; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clicked)
    function clicked(){
       make_sound(this.innerHTML);
       animate_button(this.innerHTML);
    }

}
document.addEventListener("keydown", function(event){
    make_sound(event.key);
    animate_button(event.key);
})
function make_sound(key){
     
        switch (key) {
            case "w" :
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
                case "a" :
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
                case  "s":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
                case "d" :
                var  tom_1= new Audio("./sounds/tom-1.mp3");
                tom_1.play();
                break;
                case "j" :
                var tom_2 = new Audio("./sounds/tom-2.mp3");
                tom_2.play();
                break;
                case "k":
                var tom_3 = new Audio("./sounds/tom-3.mp3");
                tom_3.play();
                break;
                case "l" :
                var t4 = new Audio('./sounds/tom-4.mp3');
                t4.play();
                break;
            default:
                break;
        }
}

function animate_button(currentkey){
    var a = document.querySelector("."+currentkey)
    a.classList.add("pressed");
    
    setTimeout(function (){
        a.classList.remove("pressed");
    },100);
        
            
        }
    