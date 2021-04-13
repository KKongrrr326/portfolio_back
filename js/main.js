/* main.js */
$(function() {

    if($(window).width() < 1024){ $('#fullpage').removeAttr('id'); }

});

$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
        keyboardScrolling : true, 
        navigation: true,
        navigationTooltips : ['Home','jisign','mintech','admin','design','contact'],
        navigationPosition: 'right',
        showActiveTooltips : true,
        scrollingSpeed : 500
        // afterResponsive : function(isResponsive){
        //     if($(window).width() < 1024){ $('#fullpage').removeAttr('id'); }
        // }

    });
});

