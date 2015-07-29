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

	// $(window).scroll(function() {
	// 		if ($(this).scrollBottom()<0)
	// 		{
	// 				$('footer').fadeOut();
	// 		}
	// 		else
	// 		{
	// 				$('footer').fadeIn();
	// 		}
	// });


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



	// $(function() {
	//
  //   	function abso() {
  //       $('#contactMain').css({
  //           // position: 'absolute',
  //           width: $(window).width(),
  //           height: $(window).height()
  //       	});
  //   	}
	//
  //   	$(window).resize(function() {
  //       abso();
  //   	});
	//
  //   	abso();
	//
	// });

	$(function() {
		if ($('main#aboutMain').length > 0)
		{
				var dh = $("#aboutMe").height();
				var spacings = 135;
		}
		else if ($('main#postMain').length > 0)
		{
				var dh = $("#postContent").height();
				var spacings = 140;
		}
		else if ($('main#contactMain').length > 0)
		{
				var dh = $("#contactContent").height();
				var spacings = 40;
		}

		else if ($('main#portfolioMain').length > 0)
		{
				var dh = $("#portfolioContent").height();
				var spacings = 325;
		}

					var wh = $(window).height();
					var nh = $("#navbar").height();
					var space = wh - dh - 57 - spacings;

					if (dh < (wh - nh) && space > 0)
					{
					 	$('footer').css('marginTop', space);
				 	}
					else {
						$('footer').css('marginTop', '20');
					}

	});


	// $(function() {
	//
  //   	function abso() {
  //       $('#aboutMain').css({
  //           // position: 'absolute',
  //           width: $(window).width(),
  //           height: $(window).height()
  //       	});
  //   	}
	//
  //   	$(window).resize(function() {
  //       abso();
  //   	});
	//
  //   	abso();
	//
	// });

	// $(function() {
	//
	// 	var wh = $(window).height();
	// 	var dh = $('#aboutMe').height();
	// 	if (dh > wh - 100)
	// 	{
	// 		  $('#aboutMe').css({
	// 				height: wh - 100
	// 			});
	// 	}
	// });

	// $(function() {
	//
  //   	function abso() {
  //       $('#portfolioMain').css({
  //           // position: 'absolute',
  //           width: $(window).width(),
  //           height: $(window).height()
  //       	});
  //   	}
	//
  //   	$(window).resize(function() {
  //       abso();
  //   	});
	//
  //   	abso();
	//
	// });
	//
	// $(function() {
	//
	// 		function abso() {
	// 			$('#postMain').css({
	// 					// position: 'absolute',
	// 					width: $(window).width(),
	// 					height: $(window).height()
	// 				});
	// 		}
	//
	// 		$(window).resize(function() {
	// 			abso();
	// 		});
	//
	// 		abso();
	//
	// });

	// $(function() {
	//
	// 	var dh = $("#aboutContent").height();
	// 	var wh = $(window).height();
	// 	var nh = $("#navbar").height();
	// 	var tp = wh/2 - dh/2 - nh;
	//
	// 	if (tp > 0)
	// 	{
	// 		$("#aboutContent").css({
	// 		top: tp
	// 		});
	// 	}
	//
	// });

	// $(function() {
	// 	var dh = $("#formArea").height();
	// 	var wh = $(window).height();
	// 	var nh = $("#navbar").height();
	// 	var lh = $("#contactLine").height();
	// 	var tp = wh/2 - dh/2 - nh - lh;
	//
	// 	if (tp > 0)
	// 	{
	// 		$("#formArea").css({
	// 		top: tp
	// 		});
	// 	}
	//
	// 	else
	// 	{
	// 		$("#formArea").css({
	// 		top: 50
	// 		});
	// 		// alert("2");
	// 	}
	//
	// });



	$("#site1").click(function(){
		$("#portfolioContent").css("display", "block"),
		$(".sites").css("display", "none"),
		$("#portfolioMain").addClass("portfolioMainBk")
    });


     $("#portfolioReturn").click(function(){
		$("#portfolioContent").css("display", "none"),
		$(".sites").css("display", "block"),
		$("#portfolioMain").removeClass("portfolioMainBk")
    });

});
