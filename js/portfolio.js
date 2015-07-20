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



	$(function() {

    	function abso() {
        $('#contactMain').css({
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
        $('#aboutMain').css({
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

		var wh = $(window).height();
		var dh = $('#aboutMe').height();
		if (dh > wh - 100)
		{
			  $('#aboutMe').css({
					height: wh - 100
				});
		}
		// var ww = $(window).width();
		//
		// if (ww < 550)
		// {
		//   $('#aboutMe').css({
		// 		height: wh - 100
		// 	});
		// }
	});

	$(function() {

    	function abso() {
        $('#portfolioMain').css({
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
				$('#postMain').css({
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

	$(function() {
		var dh = $("#formArea").height();
		var wh = $(window).height();
		var nh = $("#navbar").height();
		var lh = $("#contactLine").height();
		var tp = wh/2 - dh/2 - nh - lh;

		if (tp > 0)
		{
			$("#formArea").css({
			top: tp
			});
			// alert("1");
		}

		else
		{
			$("#formArea").css({
			top: 50
			});
			// alert("2");
		}

	});



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
