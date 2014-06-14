// jQuery Tooltip Plugin

//Register the plugin

jQuery.fn.tooltip = function () {

	//'this' is the set of selected HTML elements
	var $tips = this;
	$tips.addClass('tooltip-anchor');

	$tips.each(function (index, element) {
		var $tip = $(element); //by default 'element' is an HTML element. This turns it into a jQuery object and stores it in a variable.
		var id = $tip.data('tooltip'); // for each element, select value of the data-tooltip attribute
		var $hint = $('#' + id); //store the value of the data-tooltip in $hint with # appended so it is looking for id's in the html
		$hint.addClass('tooltip-hint'); //find the html elements with the id that matches the value of the element with the data-tooltip and add a class of tooltip-hint.
	});

	var $trigger = $('<span class="tooltip-trigger">More Info</span>'); //store the tooltip trigger in a variable
	var $widgets = $tips.wrap('<div class="tooltip"></div>').parent(); // wraps the element we are targeting to have a tooltip indicator in a div and then selects that div (This is so we don't accidentally mess up positioning on the page put in by the person using the plugin. We are adding our own wrap to give us a point of control that we know isn't being used by the website builder)
	$widgets.append($trigger); //attach it after the element with the data-tooltip attribute


	$tips.each(function (index, element) {
		var $tip = $(element); // converts HTML/DOM element with the 'data-tooltip' attribute (from the $tips.each) into jQuery object.
		var id = $tip.data('tooltip'); // for the element, look for the data-tooltip and stoares its value in id. e.g. 'tip-1'
		var $hint = $('#' + id); //convert that value above into an html id e.g.  value is tip-1, $hint now equals #tip-1 
		var $widget = $tip.parent(); //find the parent of the element (div class="tooltip")
		$widget.append($hint);	//append the element with the id specified and append it to the parent. 
		//For positiontion of the tooltip, we are using jQuery UI Position plugin. It helps with positioning relative to an HTML element and collision
		$hint.position({
			'my': 'left top',
			'at': 'right bottom',
			'of': $hint.prev()
		});
	});
			
	$('.tooltip-trigger').on('click', function (event) {
		var $hint = $(event.currentTarget).next();
		$hint.toggleClass('active'); //uses CSS to show and hide
	});
			
	return this;
};


//alternate hover. REquires tweaks to CSS.

/*$('.tooltip-hint').hide(); //hides it by default
var $triggers = $('.tooltip-trigger');
$triggers.on('mouseenter', function () {	//I'm doing this as hover, but can certainly do this as a click with toggle
	$(this).next().show(); //can use 'this' or 'event.currentTarget with an event fed into the function'
});
$triggers.on('mouseleave', function () {
	$(this).next().hide();
});*/


					
				

			