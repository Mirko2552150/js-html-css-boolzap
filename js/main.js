//FUNZIONA CORRETTAMENTE
//cambio icona utlizizzando il CSS del messaggio invio // usiamo la concatenazione
$("#mexsent").focus(function(){ // funzione FOCUS E BLUR solo x INPUT
    $(".form-lat-dx i").toggleClass("fas fa-microphone-alt fas fa-paper-plane"); // selezioni il div e le tue icone, toggle class rimuove un icona e ne inserisce un altra senza FONT AWONSE

}).blur(function(){
    $(".form-lat-dx i").toggleClass("fas fa-paper-plane fas fa-microphone-alt");
});


$(".form-lat-dx").click(function(){ // al click su incona MIC?
    invioMessaggio(); // INVOCO FUNZIONE
    invioAutoMessaggio();
});

$("#mexsent").keypress(function(event){ // se siamo dentro l'INPUT e clicclo enter allora fai funzione INVIA MESSAGGIO
    if (event.keyCode == 13) {
        invioMessaggio();
    }
});


//FUNZIONA
$("#cerca-contatti").keyup(function(event){ //alla pressione accatra un evento
    var carattereFiltro = $(this).val().toLowerCase(); // prendo il valore del selezionato
    console.log(carattereFiltro); // vediamo quello che clikkiamo sulla console
    $('.box-mess').each(function(){ //facciamo un ciclo in tutto il contenitore dei nomi, titti i div hanno lo stesso nome
        var nome = $(this).find(".nomi-contatti").text().toLowerCase(); // asseno variabile nome ad IESIMO cercandolo con FIND e la sua CLASSE SPECIFIC
        if(nome.includes(carattereFiltro)) { // se trova i caratteri
          $(this).show();  //SHOW rimangono
          setTimeout(function(){ // la scritta di ricerca viene cancellata dopo 10 secondi
              $('#cerca-contatti').val('');
          }, 10000);
        } else {
          $(this).hide(); // se non trova i catatteri scompare l'intero box contatto
          setTimeout(function(){ // la scritta di ricerca viene cancellata dopo 10 secondi
              $('#cerca-contatti').val('');
          }, 10000);
        }
    });
});


//FUNZIONA CORRETTAMENTE
$(".icon-top-lef-rig .fa-search").click(function(){ // al click scende la tendia ricerca sopra i contatti
    $(".lef-up-not").slideToggle();
});

var today = new Date(); // stringhe per inserire la data
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//FUNZIONI

function invioMessaggio(function() {
    var nomeInput = $('.form-due input').val(); // prendo il valore dell'INPUT
    $('#mexsent').val(''); // cancello valore INPUT
    var templateMessaggio = $('.template .message').clone(); // clono il filgio di template
    templateMessaggio.find('.text-mess').text(nomeInput); // scrivo il valore dell INPUT dentro al testo del messaggio
    templateMessaggio.find(".box-message").addClass("sent");
    templateMessaggio.find('.ora-messaggio').text(time); // aggiungo orario all'interno dello spazio relativo
    $('.rig-main.active').append(templateMessaggio); // inserisco il div messaggio all'interno del MAIN assieme a tutti gli altri
});

function invioAutoMessaggio(function(){
    setTimeout(function(){ // il messaggio auto parte dopo 3000 ms
        var templateMessaggio = $('.template .message').clone(); // clono il filgio di template
        messaggioBoot.find('.text-mess').text("Ciao! Ora non posso risponderti, ci sentiamo dopo");
        templateMessaggio.find(".box-message").addClass("received");
        messaggioBoot.find('.ora-messaggio').text(time);
        $('.rig-main.active').append(messaggioBoot);
    }, 1000);

});

// inizio selezione scheda per contatto
// creare un indice ad ogni elemento (div che contengono i contatti)
// al clik sul DIV contenitore
// creiamo un variabile NOME
// ciclo con EACH tutti i contenitori dei nomi
// tutti MAIN delle CHAT oscurati con DISPLAY NONE
// il nome fa comparire la scheda MAIN con il suo contenuto $ + IF , THIS SHOW
// inserire DATA ad ogni Contenitore contatto, ci permette di raggiungere tramite chiamata THIS.DATA(nome inserito CAMEL CASE)
// comprendere ATTR in JS
// attenzione usare... $document.ON (per osservare tutto l'elemento), scatena la  per mettere la funzione sugli elementi aggiunti
