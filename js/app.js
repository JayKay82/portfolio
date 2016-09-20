'use strict';

$(document).ready(function(){

  // Opens the Navigation Menu
  $("header > span.fa").on("click", function(e){
    e.preventDefault();
    console.log("Menu opened");
    $('#mobile-nav').addClass('visible');
  });

  //  Closes the Navigation Menu
  $("#mobile-nav > span.fa").on("click", function(e){
    e.preventDefault();
    console.log("Menu closed");
    $('#mobile-nav').removeClass('visible');
  });

  // Opens and Collapses Profile Text on the About Page
  $("#profile .bio a").on("click", function(e){
    e.preventDefault();
    console.log("Read more clicked");
    var $text = $("#profile .bio p");
    var $icon = $("#profile .read-more i");

    $text.toggleClass("collapse");

    if ($icon.hasClass("fa-angle-up")) {
      $icon.removeClass("fa-angle-up");
      $icon.addClass("fa-angle-down");
    } else {
      $icon.removeClass("fa-angle-down");
      $icon.addClass("fa-angle-up");
    }

    this.innerHTML = (this.innerHTML === "read more") ? "read less" : "read more";
  });
});
