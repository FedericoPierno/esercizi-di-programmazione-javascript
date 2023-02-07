/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var CurrentYear = 2023;
var birthDate = 1998;

var PersonAge = 2023 - 1998;
var OneHundred = 100 - PersonAge;
console.log(`
Questo esercizio l'ho completato nel ${CurrentYear}, sono nato nel ${birthDate}
quindi ho ${PersonAge} anni e me ne mancano ${OneHundred} per arrivare a 100 anni.
`) 
/*questo esercizio l'ho completato nel 2023, 
sono nato nel 1998 quindi ho 25 anni e me ne mancano 75 per arrivare a 100 anni.*/