$(document).ready(function(){
	$('.big-slider').slick({
	
	//autoplay : true,
	dots : true
});
	$('.small-slider').slick({
		  slidesToShow: 3,
          slidesToScroll: 1
	});

	$('.slider-two-row').slick({
		 slidesToShow: 4,
          slidesToScroll: 1
	});

$('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,      
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      autoplay: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      focusOnSelect: true,
      arrows: false,

     
    });

	$('select').each(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('select').change(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('.show-more').toggle(function(){
	$('.hide').slideDown();
}, function(){
	$('.hide').slideUp();
});
  if ($('div').is('#map')) {
         var location,s,placemark,map;

      YMaps.jQuery(function () {
        
       map = new YMaps.Map(YMaps.jQuery("#map")[0]);            
        
        map.setCenter(new YMaps.GeoPoint(37.62, 55.733), 16);
    
placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.619423,55.732408), {style: "default#redPoint"});

map.addOverlay(placemark);    
            })
    }

    $('.call').click(function(){
    	$('#pop-up').fadeIn();
    });
    $('.ico-close').click(function(){
    	$('#pop-up').fadeOut();
    });

        $( "#slider-range" ).slider({
      range: true,
      min: 2,
      max: 7,
      values: [ 2, 7 ],
      slide: function( event, ui ) {
        $( "#min" ).val( ui.values[ 0 ] );
        $( "#max" ).val( ui.values[ 1 ] );
      }
    });
       $( "#slider-range2" ).slider({
      range: true,
      min: 47,
      max: 277,
      values: [ 47, 277 ],
      slide: function( event, ui ) {
        $( "#min_p" ).val( ui.values[ 0 ] );
        $( "#max_p" ).val( ui.values[ 1 ] );
      }
    });
         $( "#min" ).val($( "#slider-range" ).slider( "values", 0 ));
        $( "#max" ).val($( "#slider-range" ).slider( "values", 1 ));
        $( "#min_p" ).val($( "#slider-range2" ).slider( "values", 0 ));
        $( "#max_p" ).val($( "#slider-range2" ).slider( "values", 1 ));
});
$(window).load(function() {

	var $container = $('.isotope'),
		$imgs = $container.find('img').hide(),
		totalImgs = $imgs.length,
		cnt = 0;

	$imgs.each(function(i) {
		var $img = $(this);
		$img.parent().attr('href',$img.attr('src')).attr('rel', 'group');
		$('<img/>').load(function() {
			++cnt;
			if (cnt === totalImgs) {
				$imgs.show();
				$container.montage({
					fillLastRow: true,
					alternateHeight: false,

					minw: 180,
					minh: 160,
					maxh: 160,
					margin: 5
				});


			}
		}).attr('src', $img.attr('src'));
	});

	
})