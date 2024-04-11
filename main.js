import { EMBEREK } from "./adat.js";
import { megjelenit, tablazatLetrehoz } from "./fuggvenyek.js";

/*

Jelenítsük meg az adatainkat egy táblázatban.
Az adatok div-ben, az urlap div-ben.
Legyen egy űrlap, amivel ilyen adatokat tudunk a táblázatba beletenni, a táblázat fejlécére kattintva rendezzük a táblázatot a név szerint.
Tudjunk törölni a táblázatból egy sort.
Legyen egy szűrőmező, ami segítségével név szerint tudjuk szűrni az adatainkat.



Milyen függvények kellenek?

1. tablazatLetrehoz(lista) -> txt lista alapján készít html kódot, táblázatot,
visszaadja az elkészült html szöveget, minden sor mellett egy törlés ikonnal.

2. megjelenit(txt) - megjeleníti  a paraméterben kapott szöveget egy adott html elemben.

3. rendez(lista) -> rlista - megrendezi a listát az adott paraméter szerint,
a megrendezett listát visszaadja.
Akkor fut le, amikor rákattintunk a táblázat fejlécére.

4. szures(lista, keresoSzoveg) -> szurtLista - akkor fog lefutni,
ha a szűrőmezőben változás történik (keyup) - a listában a név mezőben keres egyezéseket,
és szűri a listát ez alapján - filter

5. sorBeszur(lista) -> ujLista;

*/

let txt = tablazatLetrehoz(EMBEREK);
megjelenit(txt)