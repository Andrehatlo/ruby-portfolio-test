// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs

//= require summernote/summernote-bs4.min
//= require turbolinks
//= require foundation
//= require_tree .

// FOUNDATION
$(function() {
  $(document).foundation();
});

// CUSTOM SHIT:

$(document).ready(function() {
  var $navList = $('.main-nav');

  $navList.on('click', 'li:not(.is-active)', function(e){
    $navList.find('.is-active').removeClass('is-active');
    $(e.currentTarget).addClass('is-active');
  })

  var href = location.href;
  var pgurl = href.substr(href.lastIndexOf('/') + 1);
  // match all the anchors on the page with the html file name
  $('a[href="' + pgurl + '"]').addClass('is-active');
});

$(document).ready(function() {
    $(window).scroll(function() {

        if ($(this).scrollTop() >= $('#page1').height() - 40) {
          $('.nav-container').addClass('solid-nav');
          console.log('TURN SOLID');
        } else {
          $('.nav-container').removeClass('solid-nav');
          console.log('TURN NOT SOLID');
        }
    });
});
