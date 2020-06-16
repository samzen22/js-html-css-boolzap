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

  // click per aprire/chiudere il menu dei messaggi
  // $('.with-dropdown').click( function() {
  //   $(this).find('.dropdown').toggleClass('active');
  // });

  // click sul li elimina messaggio per eliminare l'intero messaggio
  // $('.elimina-messaggio').click( function(){
  //   $(this).parents('.messaggio').addClass('hidden');
  // });

  $('.with-dropdown').on('click', function(){

    $(this).parents('.dropdown').addClass('active');
    console.log('ok');
  });

  $(document).on('click', '.elimina-messaggio', function(){
    $(this).parents('.messaggio').addClass('hidden');
  });


}); // !document ready close
