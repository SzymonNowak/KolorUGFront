//dodawanie elementu listy w momencie klikniecia na przycisk, elementy listy maja byc zwiekszane co 2 czyli : 1,3,5,7,9....
//wszystkie elementy podzielne przez 3 maja miec nadana klase css ktora zmodyfikuje ich wyglad.



const btn = document.querySelector("button");
//lapiemy nasz przycisk

const list = document.querySelector("ul")
//lapiemy liste

let licznik = 1;
//tworzymy licznik ktory bedzie informacja do sprawdzania warunku



btn.addEventListener("click", naszafunckja  = () => {
    //podpinamy pod nasz przyicsk funkcje ktora bedzie wywolywana na clicku
    const li = document.createElement("li");
    //zmienna z elementem li
    li.textContent = licznik;
    //dodanie wartosci licznika jako kontent li
    list.appendChild(li)
    //dodanie li do ul
    if( licznik % 3 == 0) {
        li.classList.add("big")
    }
    //warunek sprawdzajacy i dodajamy do co trzeciego elementu klase css 
    licznik = licznik + 2;
    //zwiekszenie licznika

})

//przyklad prawie identyczny jak z lekcji 2, ktory znajduje sie w pliku main.js