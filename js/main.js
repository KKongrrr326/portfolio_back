/* main.js */

$(document).ready(function () {
    if ($(window).width() < 1024) {
        scrolloverflowed = false;
    }
    else { 
        scrolloverflowed = true;
     }
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling: true,
        scrollHorizontally: true,
        keyboardScrolling: true,
        navigation: true,
        navigationTooltips: ['Home', 'jisign', 'mintech', 'admin', 'design', 'contact'],
        navigationPosition: 'right',
        showActiveTooltips: true,
        scrollingSpeed: 500,
        responsiveWidth: 1200

    });


});

