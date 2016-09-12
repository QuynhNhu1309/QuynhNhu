
//PROCESS CAROUSEL NEW PRODUCT 
// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
    for (var i=0;i<3;i++) {
			next=next.next();
			if (!next.length) {
				next = jQuery(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
		}
    
   
    
});

$('.row_content .left').click(function(){
     $("#mycarousel_new_product").carousel("pause");
});

$('.row_content .right').click(function(){
     $("#mycarousel_new_product").carousel("pause");
});


 
// Mouse over new product carousel



$(document).ready(function () {
    $(".row_content .carousel-inner .item .thumbnail").on("mouseover", function () {
       $(this).css("background", "#ddd7e0");
    });

    $(".row_content .carousel-inner .item .thumbnail").on("mouseleave", function () {
        $(this).css("background", "#FFFFFF");
    });

});

//END PROCESS CAROUSEL NEW PRODUCT 














