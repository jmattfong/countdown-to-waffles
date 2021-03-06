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
		        src: 'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-9/12002896_10153677665603593_1595376210079577712_n.jpg?oh=772e7d087a2e3d1b87976160a00e72a4&oe=56982656',
		        w: 540,
		        h: 960
		    },
            {
                src: 'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11990510_10153677667793593_4749282332581508979_n.jpg?oh=0f4ad06f91c12ee060aab36b62080120&oe=566DC3A5',
                w: 540,
                h: 960
            },
            {
                src: 'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/11863353_10153677667403593_8031653824504994660_n.jpg?oh=fe5cf7498ac343d2228a8456cb6841c0&oe=569F5E95',
                w: 540,
                h: 960
            },
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
    
    var lettersDiv = $('#letters');
    var colours = ['#198AFF', '#1FE866', '#FFFD2F', '#E88C1A', '#FF2252']
    
    cheet('w a f f l e s', {
        next: function (str, key, num, seq) {
            console.log('key pressed: ' + key);
            console.log('progress: ' + num / seq.length);
            console.log('seq: ' + seq.join(' '));
            
            var id = 'letter-' + num;
            
            var addLetter = '<span id="' + id + '" class="pop-up-letter" hidden>' + key + '</span>'
            
            lettersDiv.append(addLetter);
            
            var curLetter = $('#' + id);
            
            curLetter.css('color', colours[num % colours.length]);
            curLetter.fadeIn('slow', 'swing');
        },
        fail: function () {
            $('.pop-up-letter').remove();
        },
        done: function () {
            var oneDay = 24*60*60*1000;
            var wafflesDate = new Date('2015-10-04');
            var currDate = new Date();
            
            var dateDiff = Math.round(Math.abs((wafflesDate.getTime() - currDate.getTime())/(oneDay)));
            
            var waffler = new Waffler(100 / dateDiff);
            waffler.setup();
            
            setInterval(function(){
                lettersDiv.fadeToggle((dateDiff * 200), 'swing')
            }, (dateDiff * 200));
        }
    });
});

