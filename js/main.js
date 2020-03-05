
$(".fa-microphone-alt").click(function(){ // al click su incona MIC?
    var nomeInput = $('#mexsent').val();
    $('#mexsent').val('');

    var messaggio = $('.template .message').clone();
    messaggio.find('.text-mess').text(nomeInput);
    messaggio.find('.ora-messaggio').text(time);
    $('.rig-main').append(messaggio);
});


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
