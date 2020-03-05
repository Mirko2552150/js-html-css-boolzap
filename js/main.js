
$(".fa-microphone-alt").click(function(){ // al click su incona MIC?
    var nomeInput = $('#mexsent').val();
    $('#mexsent').val('');

    var messaggio = $('.template .message').clone();
    messaggio.find('.text-mess').text(nomeInput);
    messaggio.find('.ora-messaggio').text(time);
    $('.rig-main').append(messaggio);

    setTimeout(function(){
        var messaggioBoot = $('.templateAuto .message').clone();
        messaggioBoot.find('.text-mess').text("Ciao! Ora non posso risponderti, ci sentiamo dopo");
        messaggioBoot.find('.ora-messaggio').text(time);
        $('.rig-main').append(messaggioBoot);
    }, 3000);

});

//cambio icona utlizizzando il CSS del messaggio invio
$(".messaggio").mouseenter(function(){
    $(".fa-microphone-alt").css("display","none")
    $(".fa-paper-plane").css("display","block")
})

$(".messaggio").mouseleave(function(){
    $(".fa-microphone-alt").css("display","block")
    $(".fa-paper-plane").css("display","none")
})



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

$(".icon-top-lef-rig .fa-search").click(function(){ // al click scende la tendia ricerca sopra i contatti
    $(".lef-up-not").slideToggle();
});

var today = new Date(); // stringhe per inserire la data
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
