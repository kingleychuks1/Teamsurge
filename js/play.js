$(document).ready(function(){
//hide all product page
new WOW().init();

$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 450) {
				$('.fab').fadeIn();
			} else {
				$('.fab').fadeOut();
			}

		});

$('.fab').click(function() {
		$('html').animate({ scrollTop: 100 }, 'slow');
	});


$('.fgt').click(function(){
	$('.fgt').hide();
$('.fpass').fadeIn();
$('.fpass').addClass("animated slideInRight");
$('.fpass').addClass("fpassclick");


});
	
$('.btn-floating').click(function(){
$('.btn-floating').addClass("z-depth-2");
$('.floating').removeClass("z-depth-2");
});

$('.floating').click(function(){
$('.btn-floating').removeClass("z-depth-2");
$('.floating').addClass("z-depth-2");
});



// if($(window).width()<991){
// $('.topbar').removeClass("navbar-light");
// $('.topbar').addClass("navbar-dark");

// }




});