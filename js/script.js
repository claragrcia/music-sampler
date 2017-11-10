$(document).ready(function() {

	// all of your functions and so on go here

// where to write the message
var m = document.getElementById("songname");



// hide them all

  function useLoad() {
      $('#bothsidesnow').hide();
      $('#bigyellowtaxi').hide();
      $('#peopleparty').hide();
      $('#blues').hide();
      $('#songname').hide();
      $('#geniusjoni').hide();
  }


useLoad();

// when clicked... show

$('.covers').click(function() {

  $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
  });

  useLoad();

  switch ($(this).attr("id")) {
       case "bothsides":
         $('#bothsidesnow').show();
         $('#songname').show();
         m.innerHTML = '"Both Sides Now"';
         break;
       case "bigyellow":
         $('#bigyellowtaxi').show();
         $('#songname').show();
         m.innerHTML = '"Big Yellow Taxi"';
         break;
       case "peoplesparties":
         $('#peopleparty').show();
         $('#songname').show();
         m.innerHTML = '"Peoples Parties"';
         break;
       case "caseofyou":
         $('#blues').show();
         $('#songname').show();
         m.innerHTML = '"A Case of You"';
         break;
       }

   });

   $('#joni2').click(function() {
      $('#geniusjoni').slideToggle();
    });



}); // do not delete
