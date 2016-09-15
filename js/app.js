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
