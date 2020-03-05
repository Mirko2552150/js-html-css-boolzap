
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


$("#cerca-contatti").keyup(function(event){ //alla pressione accatra un evento
    var carattereFiltro = $(this).val().toLowerCase(); // prendo il valore del selezionato
    console.log(carattereFiltro); // vediamo quello che clikkiamo sulla console
    $('.box-mess').each(function(){
        var nome = $(this).find(".nomi-contatti").text().toLowerCase();
        if(nome.includes(carattereFiltro)) {
          $(this).show();
        } else {
          $(this).hide();
        }
    });
});


$(".icon-top-lef-rig .fa-search").click(function(){
    $(".lef-up-not").slideToggle();
});

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
