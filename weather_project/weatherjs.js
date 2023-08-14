document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.searchbar');
    const searchBtn = document.querySelector('.search-btn'); // Assuming your HTML has an element with class 'search-btn'

    async function getWeather(city) {
        var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c125394d333ee104062b4a709d21b166&units=metric`);
        var data = await res.json();
        console.log(data);
        document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "°C";
         document.querySelector('.city').innerHTML = data.name;
         document.querySelector('.per1').innerHTML = Math.round(data.main.humidity) + "%";
         document.querySelector('.wind1').innerHTML = Math.round(data.wind.speed) + "Km/h";
    }
    searchBtn.addEventListener('click', () => {
        getWeather(searchInput.value);
    });
});
