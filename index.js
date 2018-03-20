
$( ".target" ).show( "slide", 1000, callback );
function callback() {
      setTimeout(function() {
       $(".target").effect( "shake", { times: 1, distance: 3}, 700 );
      } );
    };