//cambio icona utlizizzando il CSS del messaggio invio // usiamo la concatenazione
$("#mexsent").focus(function(){ // funzione FOCUS E BLUR solo x INPUT
    $(".form-lat-dx i").toggleClass("fas fa-microphone-alt fas fa-paper-plane"); // selezioni il div e le tue icone, toggle class rimuove un icona e ne inserisce un altra senza FONT AWONSE

}).blur(function(){
    $(".form-lat-dx i").toggleClass("fas fa-paper-plane fas fa-microphone-alt");
});

$(".form-lat-dx").click(function(){ // al click su incona MIC?
    invioMessaggio(); // INVOCO FUNZIONE
});

$(".icon-top-lef-rig .fa-search").click(function(){ // al click scende la tendia ricerca sopra i contatti
    $(".lef-up-not").slideToggle();
    $('.sch-lef-down').toggleClass("active");
});

$("#mexsent").keypress(function(event){ // se siamo dentro l'INPUT e clicclo enter allora fai funzione INVIA MESSAGGIO
    if (event.keyCode == 13) {
        invioMessaggio();
    }
});

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



//FRECCETTE INTERNE MESSAGGI
$(document).on('mouseenter', '.box-message', function(){ // analizza tutto il documento, ON (accadere di un evento scatena una funzione, dove tra le vorgolette)
    $(this).find(".arrow-message").slideDown();
});
$(document).on('mouseleave', '.box-message', function(){
    $(this).find(".arrow-message").slideUp();
});
$(document).on('click', '.box-message', function(){
    $(this).find(".delete-message").slideToggle();
});

// tasto bell
$(".fa-bell-slash, .notif").click(function(){
    $(".fa-bell-slash").hide();
    $(".fa-bell").show();
    $(".notif").hide();
    $(".notif-acti").show();

});

$(".fa-bell, .notif-acti").click(function(){
    $(".fa-bell").hide();
    $(".fa-bell-slash").show();
    $(".notif-acti").hide();
    $(".notif").show();
});

var today = new Date(); // stringhe per inserire la data
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//FUNZIONI

function invioMessaggio(){
    var nomeInput = $('#mexsent').val(); // prendo il valore dell'INPUT
    if (nomeInput.trim().length > 0) { // trim cancella spazi vuoti se testo del massaggio è maggiore di zero fai parite il messaggio
        $('#mexsent').val(''); // cancello valore INPUT
        var templateMessaggio = $('.template .message').clone(); // clono il filgio di template
        templateMessaggio.find('.text-mess').text(nomeInput); // scrivo il valore dell INPUT dentro al testo del messaggio
        templateMessaggio.find(".box-message").addClass("sent");
        templateMessaggio.find('.ora-messaggio').text(time); // aggiungo orario all'interno dello spazio relativo
        $('.rig-main.active').append(templateMessaggio); // inserisco il div messaggio all'interno del MAIN assieme a tutti gli altri
        scroll() // infine scrolla verso il basso
        setTimeout(function(){ // il messaggio auto parte dopo 1000 ms
            var templateMessaggioAuto = $('.template .message').clone(); // clono il figlio di template
            templateMessaggioAuto.find('.text-mess').text("Ciao! Ora non posso risponderti, ci sentiamo dopo");
            templateMessaggioAuto.find(".box-message").addClass("received");
            templateMessaggioAuto.find('.ora-messaggio').text(time);
            $('.rig-main.active').append(templateMessaggioAuto);
            scroll() // infine scrolla verso il basso
        }, 1000);
    } else {
        console.log("non hai scritto testo");
    }
};

function scroll() {
    var pixelScroll = $('.rig-main.active').height(); // associo var ad altezza DIV messaggi
    $('.rig-main.active').scrollTop(pixelScroll); // scrolla degli stessi pixel verso il basso

}

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
