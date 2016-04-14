var H5P = H5P || {};

// H5P.Template has to match machine name in library.json
H5P.BasicTypes = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      templatetext: 'templateText',
      simpleText: 'simpleText',
      advancedText: 'advancedText',
      simpleNumber: 1,
      advancedNumber: 5,
      simpleBoolean: true,
    }, options);
    // Keep provided id.
    this.id = id;
  };
 
  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("template-class");


    // Add simple text.
    $container.append('<div class="simple-text">' + this.options.simpleText + '</div>');
 
    // Add advanced text.
    $container.append('<div class="advanced-text">' + this.options.advancedText + '</div>');
 
    // Add simple number.
    $container.append('<div class="simple-number">' + this.options.simpleNumber + '</div>');
 
    // Add advanced number.
    $container.append('<div class="advanced-number">' + this.options.advancedNumber + '</div>');
 
    // Use simple boolean.
	if (this.options.simpleBoolean){
    	$container.append('<div class="simple-boolean">' + 'true' + '</div>');
	}


 
  };
 
  return C;
})(H5P.jQuery);
