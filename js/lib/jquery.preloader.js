/* Preloader by Shahriar 
 * http://scripteden.com/ 
 **/
(function ($) {
    $(window).load(function () {
        $('#status').fadeOut();
        $('#preloader').delay(300).fadeOut('slow');
    });
}(jQuery));