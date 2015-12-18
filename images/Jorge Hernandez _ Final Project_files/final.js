/* Contact Toggle */
$(document).ready(function () {
    $('#info').click(function () {
    event.preventDefault();
    $('#info ~ ul').toggle();
    });
});
/* Read more/less */
$(document).ready(function(){
	$('.readmore').click(showMore);
		function showMore(){
			event.preventDefault();
			console.log('read more button clicked');
			//hide read more button
				$('.readmore').hide();
			//show hidden text
				$('#show-this-on-click').slideDown();
			//show read less button
				$('.readless').show();
		}
});

$('.readless').click(showLess);
	function showLess(){
		event.preventDefault();
		//hide read less botton
			$('.readless').hide();
		//show less text
			$('#show-this-on-click').slideUp(function(){
		//show read more button
				$('.readmore').show()
		})
};


$(document).ready(function(){
    $("#mid_box").hover(function(){
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", "#805300");
    });
});


/* Back to Top */
$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $('.go-top').fadeIn('slow');
    if (scrolled < 300) $('.go-top').fadeOut('slow');
  });
  
  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});
