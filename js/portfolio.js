$(document).ready(function(){



	$(window).scroll(function() {
    	if ($(this).scrollTop()>0)
     	{
       		$('nav').fadeOut();
     	}
    	else
     	{
      		$('nav').fadeIn();
     	}
 	});

	$(function() {

    	function abso() {
        $('#titleImg').css({
            // position: 'absolute',
            width: $(window).width(),
            height: $(window).height()
        	});
    	}

    	$(window).resize(function() {
        abso();
    	});

    	abso();
	});

	$(function() {

			function abso() {
				$('main').css({
						// position: 'absolute',
						width: $(document).width(),
						height: $(document).height()
					});
			}

			$(window).resize(function() {
				abso();
			});

			abso();
	});



	// $(function() {
	// 	if ($('main#aboutMain').length > 0)
	// 	{
	// 			var dh = $("#aboutMe").height();
	// 			var spacings = 134;
	// 	}
	// 	else if ($('main#thoughtsMain').length > 0)
	// 	{
	// 			var dh = $("#thoughtsContent").height();
	// 			var spacings = 140;
	// 	}
	// 	else if ($('main#postMain').length > 0)
	// 	{
	// 			var dh = $("#postContent").height() - 13;
	// 			var spacings = 0;
	// 	}
	// 	else if ($('main#contactMain').length > 0)
	// 	{
	// 			var dh = $("#contactContent").height();
	// 			var spacings = 40;
	// 	}
	// 	else if ($('main#portfolioMain').length > 0)
	// 	{
	// 			var dh = $("#portfolioContent").height();
	// 			var spacings = 736;
	// 	}
	//
	// 				var wh = $(window).height();
	// 				// var nh = $("#navbar").height();
	// 				// alert("window: " + wh);
	// 				// alert("spacings: " + spacings);
	// 				// alert("div: " + dh);
	//
	// 				var space = wh - dh - 57 - spacings;
	// 				// alert("space" + space);
	// 				if (dh < (wh - 57) && space > 0)
	// 				{
	// 				 	$('footer').css('marginTop', space);
	// 			 	}
	// 				else
	// 				{
	// 					$('footer').css('marginTop', '20');
	// 				}
	//
	// });

	jQuery('body').bind('click', function(e) {
		if(jQuery(e.target).closest('.navbar').length == 0)
		{
			var opened = jQuery('.navbar-collapse').hasClass('collapse in');
			if ( opened === true )
			{
					jQuery('.navbar-collapse').collapse('hide');
			}
		}
	});


});
