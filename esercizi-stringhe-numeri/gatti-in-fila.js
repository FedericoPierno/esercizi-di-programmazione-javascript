/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/
var cats = 44;
var raw = 6;

var CatsRaws = cats/raw;
var Rounded = math.ceil(CatsRaws);
var MissingCats = cats%raw;
console.log(
  `ci sono ${cats} gatti in fila per ${raw},
  quindi sono disposti per ${Rounded} e ne rimangono ${MissingCats}.
`);
//"ci sono 44 gatti in fila per 8, quindi sono disposti per 8 e ne rimangono 4"
