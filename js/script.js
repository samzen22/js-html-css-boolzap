$(document).ready( function() {

// invio il messaggio con il tasto invio della tastiera
$('.invia-messaggio').keypress( function(event){
  if (event.which == 13) {

    // copio il messaggio inviato in una variabile
    var messaggio = $('.invia-messaggio').val();

    // clono il template messaggio
    var templateMessaggio = $('.template > .messaggio').clone();

    // aggiungo il testo della variabile messaggio nel template messaggio
    templateMessaggio.find('.text-messaggio.top h4').text(messaggio);

    // appendo il template messaggio nel box messaggi
    $('.box-messaggi').append(templateMessaggio).addClass('active');

    // cancello il messaggio inviato dall'input
    $('.invia-messaggio').val('');
  }
});









}); // !document ready close
