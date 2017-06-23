$(document).ready(function() {

    var menuTrigger = $('#menuTrigger');
    var navigationList = $('#navigationList');

    menuTrigger.on('click', function() {
        navigationList.toggleClass('open');
    });

});