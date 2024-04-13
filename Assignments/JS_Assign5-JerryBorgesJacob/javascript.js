//function to wait for the page to load
window.onload = function(){

    // Declare variables to fetch HTML elements

    //Elements to display objects from OpenWeather API
    var location = document.getElementById("location");
    var temperature = document.getElementById("temperature");
    var conditions = document.getElementById("conditions");
    var image = document.getElementById("image");
    var humidity = document.getElementById("humidity");

    //Sections to display output message 
    var output = document.getElementById("output");
    var error = document.getElementById("error");

    //Buttons to determine location
    var city1 = document.getElementById("Toronto");
    var city2 = document.getElementById("Chicago");

    //Event Listener for Toronto city
    city1.addEventListener("click", function(){
        showWeather("Toronto");
    });

    //Event Listener for Chicago city
    city2.addEventListener("click", function(){
        showWeather("Chicago");
    });

    //function to display weather for selected city, with the city being passed as a parameter
    function showWeather(city){  
    
    //My API Key for OpenWeatherAPI
    var APIKey= "3664fc8f8b9de8aa28fd9e00011160b8";

    //URL to collect weather data using API
    var api_url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey+"&units=metric";
    
    //Using XMLHttpRequest to retrieve API Data
    var xhr = new XMLHttpRequest();

    //Requesting a URL
    xhr.open('GET', api_url,true);

    //Defining data type to be formatted as JSON
    xhr.responseType = "json";
    xhr.send(null);

    xhr.onreadystatechange =function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                var DATA = xhr.response; //The response is a JSON Object
                console.log(DATA);

                var iconcode = DATA.weather[0].icon; // receiving icon code to display the Weather icon

                var icon_URL = "https://openweathermap.org/img/wn/"+iconcode+"@2x.png"; //URL to retrieve Weather Icon

                //Setting the properties to display the icon as an image
                image.src = icon_URL;
                image.style.width = "50px";
                image.style.height = "50px";
                image.style.backgroundColor = "grey";
                image.style.border = "transparent";
                image.style.borderRadius = "10px";

                
                location.innerHTML = DATA.name;//Displaying the name of the city

                //Displaying the weather description
                conditions.innerHTML = (DATA.weather[0].description).charAt(0).toUpperCase()+ (DATA.weather[0].description).slice(1) + ".";

                //Displaying the temperature in Celsius
                temperature.innerHTML = Math.floor(DATA.main.temp) + "&deg;C";//adding HTML entity for degree symbol

                //Displaying the FIFTH object (Humidity)
                humidity.innerHTML = DATA.main.humidity + "&percnt;";//adding HTML entity for percent symbol

                output.style.display = "block";//setting the section to be displayed as 'block'.
                /*NOTE: I added this line of code at the end so that the section would be displayed after all the objects from the API
                        are displayed in their respective HTML elements. Otherwise, the section is displayed first and then we can see 
                        the text and icon appear after that.*/
            }
            //Error Handling
            else {
                
                error.style.display = "block";//set the section to display as 'block'
                console.log(xhr.status);//log the error

            }
        }
    }
    };
}