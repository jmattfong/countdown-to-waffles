$(function() {
    $('#main-content').css({
        'position' : 'absolute',
        'left' : '50%',
        'top' : '50%',
        'margin-left' : -$('#timer').outerWidth()/2,
        'margin-top' : -$('#timer').outerHeight()/2
    });

	$( "#corgi-gif" ).click(function() {
	    // PhotoSwipe stuff
		var pswpElement = document.querySelectorAll('.pswp')[0];
		// build items array
		var items = [
		    {
		        src: 'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/11921689_10153621470923593_254311060190070312_n.jpg?oh=5272f2eb97dbec1344f1fb5ad0fce28e&oe=5674F964',
		        w: 540,
		        h: 960
		    }
		];
		// define options (if needed)
		var options = {
		    // optionName: 'option value'
		    // for example:
		    index: 0 // start at first slide
		};
		// Initializes and opens PhotoSwipe
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	});
});

