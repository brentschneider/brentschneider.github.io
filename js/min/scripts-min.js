$(document).ready(function(){$.simpleWeather({location:"Spokane, WA",woeid:"",unit:"f",success:function(t){$(".city").html(t.city),$(".temp").html(t.temp),$(".cond-code").html(t.currently)},error:function(t){console().log(t),$("#weather").html("<p>"+t+"</p>")}})});