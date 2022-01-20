function searchCity(){
    let city = $('.cityInput').val();
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e3be35a1576ecc27e0fdbf65c71f0e30`;
    $.getJSON(link, 
    function(data){
        let icon  = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`
        let city = data.name;
        let date = new Date(data.dt * 1000)
        date = date.toLocaleString();
        let weather = data.weather[0].main;
        let temp = data.main.temp;
        let feelsLike = data.main.feels_like;

        $('.date').html(`Date: ${date}`);
        $(".city").html(`Location: ${city}`);
        $(".icon").attr('src', icon);
        $('#weatherType').text(weather);
        $('#temp').text(`${temp}° |`);
        $('#feels').text(`Feels Like: ${feelsLike}°`)
        $('#weatherContainer').attr('class', 'weatherContainer')
        $("body").css("background-size", function() {
            let vw = `${window.innerWidth}px`;
            let vh = `${window.innerHeight}px`;
            
            return `${vw} ${vh}`
        })
        $('.cityInput').val('')
    })
}

$("body").css("background-size", function() {
    let vw = `${window.innerWidth}px`;
    let vh = `${window.innerHeight}px`;
    
    return `${vw} ${vh}`
})

if(window.innerWidth <= 390) {
    $(".weather").css('display', 'block')
}

$('.cityInput').keyup(function(event) {
    if(event.which === 13) {
      searchCity();
    }
})