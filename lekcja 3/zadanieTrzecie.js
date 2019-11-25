document.body.style.height = "10000px"

const div = document.createElement("div");
document.body.appendChild(div);
let size = 200;
let grow = true;

div.style.position = "fixed"; 
div.style.top = "0";
div.style.left = "0";
div.style.width = "100%";
div.style.height = size + 'px';
div.style.backgroundColor = "green";




window.addEventListener("scroll", chnageHeight = () => {

    if(size > window.innerHeight/2) {
        grow = !grow
        div.style.backgroundColor = " blue"
    } else if( size <= 0) {
        grow = true;
        div.style.backgroundColor = " green"

    }
    
    if(grow == true ) {
        size = size + 10;
     div.style.height = size + 'px';
    }else {
          size = size - 10;
     div.style.height = size + 'px';
    }
})


//zadanie analogiczne do zadania 2, z tym ze tym razem "opuszczalismy" kwadrat z gory do polowy a potem "chowalismy go "
