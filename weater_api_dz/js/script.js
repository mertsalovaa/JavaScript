let city;
let key = "43f53d8ead3f613e320b1490d78bf71b";
let url;
let url2;
let div = document.querySelector('.info');
let div2 = document.querySelector(".info2");
let input = document.querySelector("#searchField");
input.addEventListener('keyup', keyPress);

function keyPress(event) {
    if (event.keyCode == "13") {
        console.log("Enter => " + event.keyCode);
        getData();
    }
};

function getData() {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    city = document.querySelector('input').value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

    let url2 = new URL('https://api.openweathermap.org/data/2.5/forecast');
    let searchParams = new URLSearchParams();
    searchParams.append('q', 'Rivne');
    searchParams.append('appid', key);
    searchParams.append('cnt', 5);
    url2.search = searchParams;
    // url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`;
    let city2 = document.createElement('h2');
    let error = document.createElement('h1');
    let error2 = document.createElement('h3');
    $.ajax({
        url: url,
        type: 'GET',
        success: (responce) => {
            console.log(responce);
            let desc = document.createElement('p');
            let img = document.createElement('img');
            let temp = document.createElement('h5');
            let temp_min = document.createElement('p');
            let temp_max = document.createElement('p');
            let wind = document.createElement('p');

            city2.style.color = '#10922e';

            city2.innerText = responce.name + ", " + responce.sys.country;
            desc.innerText = responce.weather[0].description;
            img.src = `http://openweathermap.org/img/wn/${responce.weather[0].icon}@2x.png`;
            temp.innerText = responce.main.temp + '°C';
            temp_min.innerText = "Min temperature: " + responce.main.temp_min + '°C';
            temp_max.innerText = "Max temperature: " + responce.main.temp_max + '°C';
            wind.innerText = "Wind speed (km/h): \t" + responce.wind.speed;
            div.append(city2);
            div.append(desc);
            div.append(img);
            div.append(temp);
            div.append(temp_min);
            div.append(temp_max);
            div.append(wind);

            $.ajax({
                url: url2,
                type: 'GET',
                success: (responce2) => {

                    console.log(url2);
                    for (let i = 0; i < responce2.list.length; i++) {
                        let card = document.createElement("div");
                        let time2 = document.createElement("p");
                        let card_body = document.createElement("div");
                        let desc2 = document.createElement('p');
                        let wind2 = document.createElement('p');
                        let img2 = document.createElement('img');

                        card.classList.add("card");
                        time2.classList.add('card-text');
                        desc2.classList.add('card-text');
                        wind2.classList.add('card-text');
                        img2.classList.add("card-img-top");
                        card_body.classList.add("card-body");

                        time2.innerText = responce2.list[i].dt_txt;
                        desc2.innerText = responce2.list[i].weather[0].description;
                        wind2.innerText = 'Wind speed (km/h): ' + responce2.list[i].wind.speed;
                        img2.src = `http://openweathermap.org/img/wn/${responce2.list[i].weather[0].icon}@2x.png`;

                        card_body.append(time2);
                        card_body.append(desc2);
                        card_body.append(img2);
                        card_body.append(wind2);
                        card.append(card_body);

                        div2.append(card);
                    }
                }
            })
            // if()
        },
        statusCode: {
            404: function () {
                error.innerText = "404";
                div.style.textAlign = 'center';
                city2.style.textTransform = 'uppercase';
                city2.innerText = `not found`;
                error2.innerText = "Please, enter different city...";
                div.append(error);
                div.append(city2);
                div.append(error2);
            }
        }
    })
}