//kwadracik ma zwiekszac swoja wielkosc az osiagnie 50% okna przegladarki, gdy sie to stanie ma sie zaczac zmiejszac az zniknie, potem znowu ma rosnac



const kwadrat = document.createElement('div');
//lapmiey nasz kwadrat
document.body.appendChild(kwadrat);
//dodajemy do struktury strony

//wszystkie podstawowe style css powinny byc pisane w pliku css, lecz na potrzeby przecwiczenia wykorzystalismy js do tego.

// kwadrat.style.width = "100px";
//odwolujemy sie do naszej zmiennej kwadrat ktora ma w sumie wbudowany parametr .style gdzie mozemy odwola sie do naszych styli
// kwadrat.style.height = "100px";
// kwadrat.style.backgroundColor = " red ";
//zobacz ze w css wygladaloby to tak: 
//background-color: wartosc;
//w js uzywamy "camel case" i pomijamy znaki specjalne zapisujac kazde kolene slowo z duzej litery.

let grow = true;
//tworzymy flage ktora bedzie zmieniala dzialanie naszego programu w zaleznosci od porzadanego efektu

let size = 100;


//moglibysmy zostawic rozwiazanie z 11 i 13 lini, lecz nie pozwala ono nam w wygodny sposob modyfikowac potem wielkosci elementu
kwadrat.style.width = size + "px";
//zadziala tutaj konwersja typow, wynikiem bedzie "100px"
kwadrat.style.height = size + "px";


//obiekt window jest odniesieniem do okna przegladarki, document jest odowlaniem do ciala strony, a window to przegladarki!
// window.innerHight
// window.innerWidth.

window.addEventListener("scroll", modyfikujKwadrat = () => {
//tym razem odwolujemy sie do window ( patrz linia 32 ) bo na przesuwaniu strony w gore badz w dol, chcemy wywolac nasza funkcje ( za kazdym razem jak wykonamy scroll)

    //ETAP 1

    //towrzymy warunek ktory sprawdza nam czy nasz kwadracik nie jest wielkosci polowy okna przegladarki
    //w wartosci window.innerWidth przechowywana jest informacja o dlugosci naszego okna przegladarki
    //dzielimy przez 2 bo chciemy polowe tej wartosci

    //  if(size < window.innerWidth / 2 ) {
    //  jezeli jest, chcemy zwiekszyc wielkosci naszego diva o 5px z kazdym wywolaniem
    //      size = size + 5;
    //      kwadrat.style.width = size + "px";
    //      kwadrat.style.height = size + "px";
    //  przypisujemy nowa powiekszona wartosc do naszeych wlasciwosci css

    //  } else  {
    //  w przeciwnym przypadku chcemy zaczac zmniejszac nasz kwadrat
    //      size = size - 5;
    //      kwadrat.style.width = size + "px";
    //      kwadrat.style.height = size + "px";
    //  }   
    //w tej formie otrzymalismy efekt "epilepsji" kwadrat dochodzil do polowy wielkosci, nastepnym scroll zmniejszal go o 5px , nastepny odrazu zwiekszal, zadzialo sie tak poniewaz
    //warunek spelnial sie za kazdym razem gdy kwadrat byl mniejszy od polowy,potem byl na moment wiekszy, i potem znowu mniejszy. W rozwiazaniu tego problemu posluzylismy sie flagami.

     








    if(grow == true) {
        // przyjelismy ze wartosc true oznacza ze nasz kwadrat powinien rosnac, bazowa wartoscia jest true, bo chcemy zeby na poczatku rosnal
        size = size + 5;
         kwadrat.style.width = size + "px";
         kwadrat.style.height = size + "px";
    } else {
            size = size - 5;
         kwadrat.style.width = size + "px";
         kwadrat.style.height = size + "px";
         //jest to skopiowana logika z wyzszej czesci kodu
    }

    if( size  >= window.innerWidth/2) {
        //sprawdzamy czy wielksoc jest wieksza albo rowna polowie szerokosci okna przegladarki
        //jezeli jest zmieniamy nasza flage na false w celu wywoalania else z 75lini
        grow = false;
        // grow = !grow
        //zapis ten przedstawia negacje, "!" jest to zaprzeczenie wartosci boolean, linie 85 i 86 robia dokladnie to samo.

    } else if( size <= 0) {
        //sprawdzamy czy wielkosc diva jest juz rowna badz mniejsza od 0 jezeli tak znowu zmieniamy flage zeby zaczal rosnac ,patrz linia 70.
        grow = true
    }




})