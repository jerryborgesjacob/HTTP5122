window.onload = function(){

    var out_location = document.getElementById("location");
    var out_temp = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");

    var APIKey= "3664fc8f8b9de8aa28fd9e00011160b8";

    var api_url = "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=3664fc8f8b9de8aa28fd9e00011160b8&units=metric";

    var xhr = new XMLHttpRequest();

    xhr.open('GET', api_url,true);

    xhr.responseType = "json";
    xhr.send(null);

    xhr.onreadystatechange =function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var DATA = xhr.response;
                console.log(DATA);

                out_location.innerHTML = DATA.name;

                out_conditions.innerHTML = (DATA.weather[0].description).charAt(0).toUpperCase()+ (DATA.weather[0].description).slice(1) + ".";


                out_temp.innerHTML = Math.floor(DATA.main.temp) + "&deg;C";
            }
            else {
                out_location.innerHTML = "Unsuccessfull API Call."
                console.log(xhr.status);0

            }
        }
    }





}