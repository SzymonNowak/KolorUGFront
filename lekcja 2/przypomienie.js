// ZMIENNE

// Czym jest zmienna? zmienna jest to szufladka w pamieci RAM komputera, ktora przechowuje wartosci.



// Deklaracja zmiennych w c,c++,c#,java 

// string napis = " napis";
// int cyfraCalkowita = 1;
// float cyfraZmiennoPrzecinkowa = 3,14;

// na poczatku dajemy typ zmiennej, potem jej nazwe a na koncu wartosc.


// js w odroznieniu od innych jezykow programowania nie posiada predefinicji typow zmiennych, js sam wybiera jakiego typu jest zmienna 
// patrzac na jej zawartosc.

// podstawowe typy zmiennych w js:

// Number
// zastepuje int,float,double

// String
// "dowolny napis"

// [1,2,100,"cos","kot"]
//tablica

// {}
//obiekt

// Boolean
//wartosc true, false , 1, 0

// NaN
//co ciekawe Nan -not a number jest typem Number, powstaje ona najczesciej poprzez probe polaczenia liczby i wyrazu, zazwyczaj informauje nas o bledzie.



// Jak zadeklarowac zmienna w JS:


// zmienna deklarujemy za pomoca jednym z 3 dostepnych slow :

// let
// const
// var


// var - jest obecnie reliktem przeszlosci, od 2015 roku jest kompletnie zapomniany i zastapiony letem i constem, problemem vara byl
// globalny zakres wzgledem , calego kodu
//wytlumacze to lepiej podczas omawiania funkcji na nastepnych zajeciach



//let - zazwyczaj uzywany dla zmiennych ktorych wartosc bedzie nadpisywana, zmieniana, czesto wykorzystywana w przypadku licznikow klikniec
// albo jako indeksy petli
//wytlumacze to lepiej podczas omawiania funkcji na nastepnych petli


// const - zmienna typu stalego, nie mozemy nadpisywac jej wartosci, mozemy jedyne modyfikowac jej zawartosc, najczesciej wykorzystywana przy tablicach
// brak mozliwosc nadpisania wartosci zmiennej czesto ratuje nas przed niechcianymi zmianami jej wartosci

let liczba = 200;
liczba = liczba + 1;
// aktaulna wartosc zmiennej liczba to 201, moze sie wydawac ze tak naprawde powiekszylismy jej wartosc o jeden
//lecz nadpisalismy jej wartosci o wynik dodawania 200 + 1

const liczba = 200;
liczba = liczba + 1;
// w przypadku consta ta sama operacja niestety nie przejdzie, bo nie jest to modyfikacja wartosci, tylko nadpisanie


const tablica = [1]
tablica = [1 ,2]
// tutaj takze mogloby sie wydaawac ze rozszerzamy tablice o nowa wartosc, niestesty takze jest to nadpisanie wartosci na ktore const nie pozwala


tablica[1] = 2 
// ta operacja zadziala normlanie, poniewaz podalismy drugi indeks tablicy ( elementy tablicy numerowane sa od 0 a nie od 1 , tak wiec pierwszym elementem jest element 0)
// i do niego przypisalismy wartosc 2, aktaulna wartosc zmiennej tablica = [1,2]



TABLICE
// tablica jest zmienna ktora pozwala przechowywac nam rozne wartosci w jednym miejscu np.
// const tablicaLiczbowa = [ 1 ,2 ,3.12, 656]
// const tablicaNapisow = ["napis1", " napis 2", "napis 3"]
// const losowWypelnionTablica = [1,2,3,"napis1",true,false,[],{},123,"napis2"]


// najlepszym sposobem na dodanie lub usuniecie elementu do tablicy sa predefiniowane funkcje js.


// const koszyk = [];
// tworzoymy pusta tablice


// koszyk.push("przedmiot1")
// na naszej tablicy wykonujemy funkcje push ktora dodaje podany przez nas przedmiot na koniec talbicy
//jej obecna zawartosc to koszyk = ["przedmiot1"]

// koszyk.push("przedmiot2")
//jej obecna zawartosc to koszyk = ["przedmiot1",przedmiot2]


// koszyk.unshift("przedmiot50")
//dodaje przedmiot na poczatek tablicy zamiast na jej koniec
//jej obecna zawartosc to koszyk = ["przedmiot50","przedmiot1",przedmiot2]


// koszyk.pop()
// usuwa ostatni element tablicy
// tablica = ["przedmiot50", "przedmiot1"]

// koszyk.shift()
//usuwa pierwszy element tablicy
// koszyk = [ "przedmiot1"]


//mozemy rowniez laczyc 2 tablice ze soba

// const piwka = ["perla",'tyskie'];
//tworzymy nowa tablice

// const koszykPiwka = koszyk.concat(piwka)
//za pomoca funkcji concat mozemy laczyc 2 tablice w jedna nowa
// zawartosc koszkyPiwa = ["przedmiot1", "perla", "tyskie"]




// Podstawowe operacje arytmetyczne :

console.log(2 + 2)
// 4
console.log("2" + 2)
//  22 
console.log(2.2 * "a")
//n Nan
console.log(true + 1)
// 2 - true jest zamieniane na 1,
console.log(false + 1)
// 1







IF


let a = 3;
let b = 5;
let c = 2;
let d = 1;



//instrukcje warunkowe towrzymy za pomoca slowa if potem w nawiasie podajemy warunek jaki musi zostac spelniony zeby instrukcja zawarta
// w niej zostala wykonana

//jezeli a byloby wieksze od b program pominalby 167 lnijike nie wyswietlajac aboslutnie nic
if (a < b) {
    
  console.log("wieksza liczba jest" + b);
  console.log("");
}
if (c > d) {
  console.log("wieksza liczba jest" + c);
  console.log("");
}

//sprawdzamy czy a jest rowne  b jezeli tak wyswietlamy "cezary" w przeciwnym wypadku " szymon"
if(a == b){
    console.log("cezary")
} else {
    console.log("szymon")
}

//w standardowych jezykach porownanie 2 wartosci robimy za pomoca znaku == , w js  dwa znaki rownosci daja ten sam efekt a 3 === sprawdza
// dodatkowo typy porownywanych przez zmiennych

const wiek = true;
const bilet = false;

// && ozaczna "i" || oznaczaja "lub"
//w tym przypadku wyswietli nam sie odmowa, poniewaz tylko wiek spelnia warunek zawarty w ifie, a zeby instrukcja zostala wkonana oba musza byc spelnione
//tutaj polecam spojrzec na tabelke ktora rysowalem na tablicy , wartosc 1 -true, wartosc - false
if( wiek && bilet) {
    console.log("jest ok")
} else { 
    console.log("odmowa")
}




//dwoma istostynmi elementami programowania sa rowniez petle oraz funkcje, na nastepnych zajeciach postaram sie wytlumaczyc te dwa pojecia
//opis zadania znajduje sie w pliku main.js

