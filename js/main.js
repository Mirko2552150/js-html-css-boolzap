//cambio icona utlizizzando il CSS del messaggio invio // usiamo la concatenazione
$("#mexsent").focus(function(){ // funzione FOCUS E BLUR solo x INPUT
    $(".form-lat-dx i").toggleClass("fas fa-microphone-alt fas fa-paper-plane"); // selezioni il div e le tue icone, toggle class rimuove un icona e ne inserisce un altra senza FONT AWONSE
    $("#mexsent").toggleClass("border");
}).blur(function(){
    $(".form-lat-dx i").toggleClass("fas fa-paper-plane fas fa-microphone-alt");
    $("#mexsent").toggleClass("border");
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

// FILTRO CONTATTI
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

//CANCELLA Messaggio
$(document).on('click', '.del-mess.due', function(){ // mi permette di cancellare anchei messaggi creati
    var messaggioDaCancellare = $(this).parentsUntil(".rig-main.active"); // seleziono dal div clicckato al figlio di .rig-main (tutto il messaggio)
    console.log(messaggioDaCancellare);
    var templateMessaggioVuoto = $('.cancella').clone(); // clono il template vuoto da sovrascrivere OK
    console.log(templateMessaggioVuoto);
    $(messaggioDaCancellare).html(templateMessaggioVuoto); // sovrascrivo il messaggio da cancellare con quello vuoto

});

// TASTO CAMPANELLA
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

$(".box-mess").click(function(){
    $(".box-mess").removeClass("background");
    $(this).addClass("background");

});


// INIZIO SELEZIONE CONTATTI CON RELATIVI MAIN CHAT
$('.box-mess').click(function(){ // seleziono click sui contenitore dei contatti
    var utenteSelezionato = $(this).data('codice-utente'); // visto in classe, l'utente è quello selezionato con il suo relativo codice "data"
    var immagineUtenteSelezionato = $(this).find("img").attr("src"); // creo var e copio IMG
    console.log(immagineUtenteSelezionato);
    var nomeUtenteSelezionato = $(this).find(".nomi-contatti").text()  // creo var e copio IMG
    console.log(nomeUtenteSelezionato);
    $('.rig-main').each(function(){ // ciclo su tutti i contenitori di CHAT
        if ($(this).data('codice-utente') == utenteSelezionato) { // se un contenitore combacia
            $('.rig-main').removeClass('active'); // faccio sparire active da tutti i contenitori
            $(this).addClass('active'); // lo aggiungo su quello selezionato (THIS)
            $(".sched-top-right .icon-user img").attr("src", immagineUtenteSelezionato);
            $(".sched-top-right .text-princ").text(nomeUtenteSelezionato);
        }
    })
});


// Variabili ora e data
var today = new Date(); // stringhe per inserire la data
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); // le inserisco nella funzione x richiarmale


//HENDLEBARS
var source = $("#template-messaggio").html(); // copio il mio TEMPLATE dei messaggi
var template = Handlebars.compile(source); // scrivo una volta sola sola il mio complitaote di HANDLEBARS

//FUNZIONI
function invioMessaggio(){
    var nomeInput = $('#mexsent').val(); // prendo il valore dell'INPUT
    if (nomeInput.trim().length > 0) { // trim cancella spazi vuoti se testo del massaggio è maggiore di zero fai parite il messaggio
        $('#mexsent').val(''); // cancello valore INPUT
        var mexInviati = {
            "testoMessaggio": nomeInput,
            "tempo": time,
            "classe": "sent"
        };
        console.log(mexInviati);
        var templatePopolatoSent = template(mexInviati);
        console.log(templatePopolatoSent);
        $('.rig-main.active').append(templatePopolatoSent);
        scroll() // infine scrolla verso il basso
        setTimeout(function(){ // il messaggio auto parte dopo 1000 ms
            var mexRicevuti = {
                "testoMessaggio": "Ciao! Ora non posso risponderti, ci sentiamo dopo",
                "tempo": time,
                "classe": "received"
            };
            var templatePopolatoReceived = template(mexRicevuti);            // Popolo il templateUtente con i dati presi dall'oggetto UTENTE
            $('.rig-main.active').append(templatePopolatoReceived);
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
