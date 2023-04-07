//Prima di tutto raccogliamo i dati necessari per fare i vari calcoli

//let backend = 20.50;    //All'ora
//let frontend = 15.30;   //All'ora
//let analisi = 33.60;    //All'ora

let codiciDisponibili = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let sconto = 0.25;

function buttonForm(event) {
    event.preventDefault();

    //Nel click quindi bisogna calcolare il tipo di lavoro * le ore richieste, ed applicare un codice sconto (se disponibile!).

    //Estrapolo i valori che mi servono per il calcolo.

    let tipoLavoro = document.getElementById("typeOfWork").value;

    let oreRichiesteStringa = document.getElementById("hoursRequest").value;
    let oreRichieste = parseInt(oreRichiesteStringa);

    let codiceSconto = document.getElementById("discountCode").value;

    /*console.log(tipoLavoro);
    console.log(oreRichieste);
    console.log(codiceSconto);*/

    switch(tipoLavoro){
        case "backend":
            commission = 20.50;
            break;
        case "frontend":
            commission = 15.30;
            break;    
        case "projectAnalisys":
            commission = 33.60;
            break;
    }

    let finalPrice = commission * oreRichieste;

    //Chiedo al programma se è presente il codice di sconto richiesto tra quelli disponibili.
    //Se si, verrà appricato, altrimenti un alert avviserà l'utente che non è valido.
    
    let codiceScontoRichiesto = codiciDisponibili.includes(codiceSconto);

    if(codiceScontoRichiesto){
        finalPrice = finalPrice * sconto;

    } else {
        alert("Il codice sconto non è valido!");
    }
    
    document.getElementById("prezzoFinale").innerHTML = "Il prezzo finale è di: " + finalPrice + " €";
}
