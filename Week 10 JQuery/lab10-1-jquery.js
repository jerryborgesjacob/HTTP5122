//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way
$(window).on("load", function() {
	$("p").hide();

	//ADD CLICK EVENT TO <h2>
	$('H2').on("click",function(){
		$("p").slideUp(3000);
		$(this).next("p").slideToggle(3000);
	});

/* hover without toggleClass
	$('p').hover(
		function(){$('p').css({'background':'#FFE5C3', 'color':'#524737'})},
		function(){$('p').css({'background':'#524737', 'color':'#FFE5C3'})},
	);
*/

	$('p').hover(
		function(){$('p').toggleClass('textHovered')}
		
	);
	




}


);


	//Inside of here is your jQuery/JavaScript


	
	
	
	
	
	
	
	//CHANGE <p> BACKGROUND ON HOVER






