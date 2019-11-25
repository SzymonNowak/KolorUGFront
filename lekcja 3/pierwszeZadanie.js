const btn = document.querySelector("button");
const list = document.querySelector("ul")

let licznik = 1;



btn.addEventListener("click", naszafunckja  = () => {
    const li = document.createElement("li");
    li.textContent = licznik;
    list.appendChild(li)
    if( licznik % 3 == 0) {
        li.classList.add("big")
    }
    licznik = licznik + 2;

})