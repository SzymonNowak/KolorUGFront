const kwadrat = document.createElement('div');
document.body.appendChild(kwadrat);
// kwadrat.style.width = "100px";
// kwadrat.style.height = "100px";
kwadrat.style.backgroundColor = " red ";

let grow = true;

let size = 100;

kwadrat.style.width = size + "px";
kwadrat.style.height = size + "px";


//pokaz window
// window.innerHight
// window.innerWidth.

window.addEventListener("scroll", modyfikujKwadrat = () => {
    //  kwadrat.style.width = size + 100 + "px";
    
    // size++

    //  kwadrat.style.width = size  + "px";

    //  if(size < window.innerWidth / 2 ) {
    //      size = size + 5;
    //      kwadrat.style.width = size + "px";
    //      kwadrat.style.height = size + "px";

    //  } else  {
    //      size = size - 5;
    //      kwadrat.style.width = size + "px";
    //      kwadrat.style.height = size + "px";
    //  }

     
    if(grow == true) {
        size = size + 5;
         kwadrat.style.width = size + "px";
         kwadrat.style.height = size + "px";
    } else {
            size = size - 5;
         kwadrat.style.width = size + "px";
         kwadrat.style.height = size + "px";
    }

    if( size  >= window.innerWidth/2) {
        grow = false;
        // grow = !grow

    } else if( size <= 0) {
        grow = true
    }




})