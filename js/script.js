$(document).ready( function() {

  // invio il messaggio con il tasto invio della tastiera
  $('.invia-messaggio').keypress( function(event){
    if (event.which === 13 || event.keycode === 13) {
      sendMessage()

      setTimeout(function(){
        receivedMessage()
      }, 2000);
    }
  });

  // invio il messaggio con il click sull'icona 'paper plane'
  $('.icon-send-message').click( function() {
      sendMessage()
  });

  // FUNZIONI

  // Funzione per mandare un messaggio
  function sendMessage() {
    // copio il messaggio inviato in una variabile
    var messaggio = $('.invia-messaggio').val();

    // controllo che venga scritto almeno un carattere se no il messaggio non parte
    if (messaggio != 0) {
      // clono il template messaggio
      var templateMessaggio = $('.template > .messaggio').clone();

      // aggiungo la classe del messagio mandato
      templateMessaggio.addClass('mandato');

      // aggiungo il testo della variabile messaggio nel template messaggio
      templateMessaggio.find('.text-messaggio.top h4').text(messaggio);

      // aggiungo l'ora corrente al messaggio
      templateMessaggio.find('.text-messaggio.bottom p').text(currentTime());

      // appendo il template messaggio nel box messaggi
      $('.box-messaggi').append(templateMessaggio).addClass('active');

      // scroll all'inserimento del messaggio
      $('.box-messaggi').scrollTop( $('.box-messaggi').height() );

      // cancello il messaggio inviato dall'input
      $('.invia-messaggio').val('');
    }
  };

  // Funzione per ricevere il messaggio
  function receivedMessage() {
    // clono il template messaggio
    var templateMessaggio = $('.template > .messaggio').clone();

    // aggiungo la classe del messagio mandato
    templateMessaggio.addClass('ricevuto');

    // aggiungo il testo della variabile messaggio nel template messaggio
    templateMessaggio.find('.text-messaggio.top h4').text('ok');

    // aggiungo l'ora corrente al messaggio
    templateMessaggio.find('.text-messaggio.bottom p').text(currentTime());

    // appendo il template messaggio nel box messaggi
    $('.box-messaggi').append(templateMessaggio).addClass('active');

    // scroll all'inserimento del messaggio
    $('.box-messaggi').scrollTop( $('.box-messaggi').height() );
  };

  // funzione per aggiungere uno zero ai numeri minori di 10
  // --- number: numero da controllare se < o > di 10
  // ----- ritorna numero
  function addZero(number) {
    var result = number;
    if (number < 10) {
      result = '0' + number;
    }
    return result;
  };

  // funzione per l'orario corrente
  // --- ritorna l'orario
  function currentTime() {
    var data = new Date();
    var ora = data.getHours();
    var minuti = data.getMinutes();
    var orario = addZero(ora) + ':' + addZero(minuti);
    return orario;
  };

  //// CLICK DROPDOWN DA RIVEDERE
  // click per aprire/chiudere il menu dei messaggi
  // $('.with-dropdown').click( function() {
  //   $(this).find('.dropdown').toggleClass('active');
  // });

  // click sul li elimina messaggio per eliminare l'intero messaggio
  // $('.elimina-messaggio').click( function(){
  //   $(this).parents('.messaggio').addClass('hidden');
  // });

  // $('.with-dropdown').on('click', function(){
  //
  //   $(this).parents('.dropdown').addClass('active');
  //   console.log('ok');
  // });
  //
  // $(document).on('click', '.elimina-messaggio', function(){
  //   $(this).parents('.messaggio').addClass('hidden');
  // });


}); // !!! document ready close !!!
