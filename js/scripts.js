// My Scripts
// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Spokane, WA',
    woeid: '',
    unit: 'f',
    success: function(weather) {

      $(".city").html(weather.city);
			$(".temp").html(weather.temp);
			$(".cond-code").html(weather.currently);

    },
    error: function(error) {
      console().log( error );
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});


// $(document).ready(function() {
//   $.simpleWeather({
//     location: 'Austin, TX',
//     woeid: '',
//     unit: 'f',
//     success: function(weather) {
//       html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
//       html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
//       html += '<li class="currently">'+weather.currently+'</li>';
//       html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
//
//       $("#weather").html(html);
//     },
//     error: function(error) {
//       $("#weather").html('<p>'+error+'</p>');
//     }
//   });
// });