(function( $ ) {
	'use strict';


	window.addEventListener("load", function(event) {

		// 
		alert('/TEST TEST TEST/ \n \n As long as plugin is activated, all posts have double date/time in PUBLISHED section - the original one (original timezone) and additional with sane time but in Browsers time zone. \n \n Press ok to continue');
    
		// first we get the post create time and offset
			const originalPostTime = document.querySelector("time").dateTime;        //get time from a <time> element ( getting by class or id is not possible, because not all themes have them in <time>)
			const originalPostTimeInBrowsersTimeZone = new Date(Date.parse(originalPostTime));      // convert node to js Date object, which corrects timezone automatically
			// console.log(`originalPostTime: ${originalPostTime} , originalPostTimeInBrowsersTimeZone: ${originalPostTimeInBrowsersTimeZone} `    )
		
			
		// then we add <br>, <p> and <time> elements to html and insert a new time into them:

			const originalTimeElement = document.querySelector("time")
		
			const newTimeElementBR = document.createElement('br');
			originalTimeElement.appendChild(newTimeElementBR);
			const newPElement = document.createElement('p');
			originalTimeElement.appendChild(newPElement);
			const newTimeElement = document.createElement('time');
			originalTimeElement.appendChild(newTimeElement);
			
			const textInPNode = document.createTextNode("Publishing time in local timezone:")
			newPElement.appendChild(textInPNode)
		
			const timeNode = document.createTextNode(originalPostTimeInBrowsersTimeZone)
			newTimeElement.appendChild(timeNode)
		
		});
		 

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

})( jQuery );
