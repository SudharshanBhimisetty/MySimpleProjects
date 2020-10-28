window.addEventListener("load",() => {



  let longg;
  let latt;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        longg = position.coords.longitude;
        latt = position.coords.latitude;
        const api1 = "https://api.openweathermap.org/data/2.5/weather?lat=" + latt + "&lon=" + longg + "&appid=9a3a986f7323703ce0e51d2315043676";



fetch(api1)
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  forcountry(data.sys.country);
  
  drawWeather(data);
}) 

    })
  }else{
      console.log("not allows");
  }

})


var locationTimezone = document.querySelector(".location-timezone");
var temperatureDegree = document.querySelector(".temperature-degree");
var temperatureDesc = document.querySelector(".temperature-description");
var search = document.querySelector(".search");
var degree = document.querySelector(".degree");
var measure = document.querySelector(".measure");
var icon = document.querySelector(".icon");

search.addEventListener("keypress",function(event){
if(event.which===13){
  var city = this.value;
  this.value = "";
  const api2 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9a3a986f7323703ce0e51d2315043676";
  
fetch(api2)
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
forcountry(data.sys.country);
  
  drawWeather(data);
}) 
}
  
})




  function drawWeather(data){
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
   locationTimezone.innerHTML  = data.name;
   temperatureDesc.innerHTML = data.weather[0].description;
   temperatureDegree.innerHTML = celcius;
    icon.innerHTML = "";
    measure.innerHTML = "C";
    var image = document.createElement("img");
    image.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
    icon.appendChild(image); 
    degrees(celcius,fahrenheit);

  }
    function degrees(celcius,fahrenheit){
        degree.addEventListener("click",function(){
        if(temperatureDegree.innerHTML == fahrenheit){
          console.log(measure.innerHTML);
        temperatureDegree.innerHTML = celcius;
        measure.innerHTML = "C";
        }else if(temperatureDegree.innerHTML == celcius){
          console.log(measure.innerHTML);
          temperatureDegree.innerHTML = fahrenheit;
          measure.innerHTML = "F";      
        }
      })  
    }
    


function forcountry(countrycode){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://restcountries-v1.p.rapidapi.com/alpha/" + countrycode,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "bcd247492amsh6e64b6f5354d967p1a13fejsncc365ce3c2dc"
    }
  }
  $.ajax(settings).done(function (response) {
    country = response.name;
    locationTimezone.append("/" + country);
  
  });
}