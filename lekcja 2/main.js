
//zdanie
//po kliknieciu w przycisk przez uzytkownika, dodajemy element div do naszego DOM ( struktura strony internetowej )
//co piate klikniecie ma dodac kolo zamiast kwadratu




const btn = document.querySelector("button");
//towrzymy zmienna ktora bedzie przechowywala w pamieci,adres do naszego przycisku
//document bierze sie od DOM Document Object Model, czyli okno przegladarki
// wywolujemy na documencie funkcje querySelector, znajduje ona w naszej strukturze nasz jedyny przycisk
//  i "lapie go" oraz zapisuje go w naszej zmiennej
//warto pamietac ze querySelector lapie nam jedynie pierwszy napotkany element danego typu
// querySelectorALL lapie nam wszystkie elementy danego typu
//uzwany consta,bo wartosc tej zmiennej zawsze bedzie tym naszym przyciskiem, wiec jest to wartosc stala


let number = 1;
//tworzymy zmienna ktora bedzie naszym licznikiem klikniec
//w przypadku licznika uzyjemy leta poniewaz co klikniecie bedziemy nadpisywac jego wartosc


// funkcje w js towrzymy w ten sposob: 

// const nazwaNaszejFunkcji = () => {

// }


const addElement = () => {
    const div = document.createElement("div");
    //tworzymy zmienna ktora bedzie przechowywac informacje o rodzaju elementu ktory bedziemy chcieli dodac na strone

    div.textContent = number;
    //bazowo stowrzony element div wygladalby tak :
    // <div>
    // </div>
    // jego zawartosc bylaby kompletnie pusta
    //wiec za pomoca text.content wrzucamy do jego srodka aktalny stan naszego licznika przez co mamy taki efekt:
    // <div>
    //     1
    // </div>

    document.body.appendChild(div);
    //do naszego okna przegladarki, a dokladnie do samego body za pomoca appendChild
    // dodajemy nasza zmienna div ktora zawiera informacje o typie elementu ktory chcemy dodac na nasza strone

    //tworzymy warunek ktory sprawdza czy dodany element jest co piatym, zeby moc zmienic jego wyglad
    if (number % 5 == 0) {
                           // % w programowaniu oznacza reszte z dzielenia ( modulo ) co wywolanie naszej funkcji sprawdza aktualny stan licznika
                           // i dziala to tak ze 1 : 5 = 0 reszty 1
                           //  2 : 5 = 0 reszty 2
                           //  3 : 5 = 0 reszty 3
                           //  4 : 5 = 0 reszty 4
                        //      5: 5 = 1 reszty 0
                        //dopiero w momencie gdy nie ma reszty z dzielenia program wchodzi w nasza instrukcje warunkowa i ja wykonuje

                           div.classList.add("cricle");
                           //do naszej zmiennej div w co piatym elemencie dodajemy klase "circle" ktora zawiera css modyfikujacy nasz element w kolko ( patrz komentarze w sekcji style w pliku html)
                         }
    number = number + 1;
    //co wywolanie funkcji zwiekszamy licznik o 1
                         };



btn.addEventListener("click", addElement);
//na naszej zmiennej przechowujacej nasz przycisk uzywany funkcji addEventListener ktora pozwala nam nasluchiwac
// zdarzenia, czyli inaczej to co robi uzytkownik na naszej stronie 
// na klikniecie przycisku chcemy wywolac nasza funkcje addElement ktora zawiera logike oraz funkcjonalnosc naszego programu 

//przykladowe eventy w js 
// "http://webmade.org/porady/zdarzenia-events-js-javascript.php"