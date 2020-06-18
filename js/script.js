$(document).ready( function() {

  // $('.contact-item').click( function() {
  //   var nameContact = $(this).find('.text-top h3').text();
  //   var avatarContact = $(this).find('.avatar img').attr();
  //   console.log(nameContact);
  // });

  // cerca nome tra lista contatti
  searchContact()

  // invio il messaggio con il tasto invio della tastiera
  $('.invia-messaggio').keypress( function(event){
    if (event.which === 13 || event.keycode === 13) {
      sendMessage()
      // ad ogni messaggio l'utente riceve una risposta da parte
      // del pc con scritto 'ok'
      setTimeout(receivedMessage, 2000);
    }
  });

  // invio il messaggio con il click sull'icona 'paper plane'
  $('.icon-send-message').click( function() {
      sendMessage()
      // ad ogni messaggio l'utente riceve una risposta da parte
      // del pc con scritto 'ok'
      setTimeout(receivedMessage, 2000);

  });


  // click per aprire/chiudere il menu dei messaggi
  $(document).on('click', '.with-dropdown', function(){
    // rimuovo la classe active dalle dropdown aperte in precedenza
    $(this).parents('.messaggio').siblings().find('.with-dropdown').children('.dropdown').removeClass('active');
    // aprire/chiudere il menu dei messaggi
    $(this).children('.dropdown').toggleClass('active');
    // scroll automatico nel caso fosse l'ultimo messaggio
    $('.box-messaggi').scrollTop( $('.box-messaggi').prop('scrollHeight') );
  });

  // // click sul li 'elimina messaggio' per eliminare l'intero messaggio
  $(document).on('click', '.elimina-messaggio', function(){
    $(this).parents('.messaggio').addClass('hidden');
  });



  // cambio e mostro la chat corretta al click sul contatto
  // e assegno l'avatar e il nome in alto
  $('.contact-item').click( function() {
    // variabile in cui inserisco l'attributo corrispondente al contatto
    var selectContact = $(this).attr('data-contact');
    // rimuovo classe active dalla chat Attiva
    $('.box-messaggi').removeClass('active');
    // variabile per selezionare la chat corrispondente al contatto
    var selectChat = '.box-messaggi[data-chat="' + selectContact + '"]';
    // aggiungo classe active alla chat corrispondente
    $(selectChat).addClass('active');


    // cambio il contatto nella colonna di destra in alto
    var nameContact = $(this).find('.text-top h3').text();
    var avatarContact = $(this).find('.avatar img').attr('src');
    $('.avatar-current .contact-name h3').text(nameContact);
    $('.avatar-current img').attr('src', avatarContact);
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
      $('.box-messaggi.active').append(templateMessaggio).addClass('active');
      // scroll all'inserimento del messaggio
      $('.box-messaggi.active').scrollTop( $('.box-messaggi').prop('scrollHeight') );
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
    $('.box-messaggi.active').append(templateMessaggio).addClass('active');
    // scroll all'inserimento del messaggio
    $('.box-messaggi.active').scrollTop( $('.box-messaggi').prop('scrollHeight') );
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


  // funzione per trovare nomi nella lista dei contatti
  function searchContact(){
    // prendo il valore dopo l'inserimento di ogni carattere nella barra search
    $('.input-search input').keyup( function(){
      // salvo il valore in una variabile
      var searchName = $('.input-search input').val().toLowerCase();
      // controllo la lista di tutti gli item
      $('.contanct-list .contact-item').each( function(){
        // creo una variabile per inserire il nome di ogni contatto
        var nameContact = $(this).find('.text-top h3').text().toLowerCase();
        // se il i caratteri della variabile (searchText) sono presenti
        // nel nome del contatto lo mostro
        if(nameContact.includes(searchName)){
          $(this).show()
        }else{
          $(this).hide()
        }
      });
    });
  }


}); // !!! document ready close !!!
