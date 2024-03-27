//LAB 10 - 2 INVENTORY PAGE
$(window).on("load", function() {
	$(".desc").hide();

	$("tr").hover(
		function(){$(this).toggleClass('selected')}
	
	);

	$("tr").on("click",function(){
		$(".desc").hide();
		$(this).find('.desc').toggle();
		
	});

	




});

	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>







	//ADD CLICK EVENT TO <tr>
