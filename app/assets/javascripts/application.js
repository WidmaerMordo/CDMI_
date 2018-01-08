// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require_tree .



$(document).ready(function() {
    $('#fix-credit-btn').click(function(){
        console.log('inside fix credit button');
        $('.modal').show();
    });

    $('.close').click(function(){
        console.log('inside close');
        $('.modal').hide();
        $('#newsletter-form')[0].reset();
    });

    $('#newsletter-form').submit(function(){
      $('.modal').hide();
      // $('#newsletter-form')[0].reset();
    });

    $('.showmore').showMore({
          speedDown: 300,
          speedUp: 300,
          height: '100px',
          showText: 'Show more',
          hideText: 'Show less'
     });


});
