// jquery
// onclick
$('#little_fires').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Little_fires.html'

});
$('#manifest').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Manifest.html'

});
$('#devs').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Devs.html'

});
$('#dark').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Dark.html'

});
$('#murder').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Murder.html'

});
$('#you').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/You.html'

});
$('#scandal').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Scandal.html'

});
$('#trouble').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Good_trouble.html'

});
$('#valley').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Silicon_valley.html'

});
$('#rayan').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Jack_Rayan.html'

});
$('#morning').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Morning_show.html'

});
$('#java').on('click', function (event) {
  window.location.href = 'http://localhost:8038/JavaWebApp_war_exploded'

});

// on Sign Up clicked
$(document).ready(function () {
  $('#sign-up-btn').on('click', function () {
    $('.sign-up-frame').css('display', 'block');
  });
});

//alert window when clicked Subscribe
$(document).ready(function () {
  $('#subscribe-btn').on('click', function () {
    alert('You are subscribed successfully!');
});



// on register clicked
//$(document).ready(function() {	
//$('#subscribe-btn').on('click', function() {
//$('.subscribe-frame').css('display', 'block');
//});
//});
});