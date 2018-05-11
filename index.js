
$( ".target" ).show( "slide", 1000, callback );
function callback() {
      setTimeout(function() {
       $(".target").effect( "shake", { times: 1, distance: 3}, 700 );
      } );
    };

//Get class name for parent
var currentli = $($('.nav').find('a.current')).parent().attr('class');
var currentl2 = $($('.nav').find('a.current')).parents('.tab1').attr('class');
alert(currentli);
alert("currentl2"+currentl2);

//Slide Function for prev and next
$("#previous").on('click', function(){
	$("#2DivT").css("left", "-179px").effect("slide", { direction: "left", duration: 900, mode: "hide", queue: false });
	$("#1DivT").effect("slide", { direction: "right", duration: 900, mode: "show", queue: false });
});

$("#next").on('click', function(){
	$("#2DivT").effect("slide", { direction: "left", duration: 900, mode: "show", queue: false }, function() { $(this).css("left", "0"); });
	$("#1DivT").effect("slide", { direction: "right", duration: 900, mode: "hide", queue: false });
});
