let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
let Url = 'https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=';
let mainDiv = $('.main').first();
let input = $('input');


function SearchInfo() {


    // console.log(getData(input));
    //     for(let i = 0; i< object; i++) {
    //         let h2 = $(mainDiv).append(document.createElement("h2"));
    // h2.text = object[i].cityUA;
    //     }

}
let btn;
function getData() {
    $.ajax({
        url: Url + input.val(),
        type: 'GET',
        success: (responce) => {
            $(mainDiv).children.length = 0;

            if (responce.devices.find((el) => { return el.cityRU == input.val(); })) {
                console.log('Good');
            };
            console.log(responce);
            for (let i = 0; i < responce.devices.length; i++) {
                let card = document.createElement("div");
                let city = document.createElement("h5");
                let address = document.createElement("h6");
                let card_body = document.createElement("div");
                let place = document.createElement('p');
                btn = document.createElement('button');

                $(card).addClass("card");
                $(city).addClass("card-title");
                $(address).addClass("card-subtitle mb-2 text-muted");
                $(place).addClass('card-text');
                $(card_body).addClass("card-body");
                $(btn).addClass('btn btn-outline-success');

                $(city).text(responce.devices[i].cityUA);
                $(address).text(responce.devices[i].fullAddressUa);
                $(place).text(responce.devices[i].placeUa);
                $(btn).text('Show map');
                $(card_body).append($(city));
                $(card_body).append($(address));
                $(card_body).append($(place));
                $(card_body).append($(btn));
                $(card).append($(card_body));
                $(mainDiv).append($(card));

                $(btn).click(function () {
                    let Lng = responce.devices[i].latitude;
                    let Lat = responce.devices[i].longitude;
                    initMap(+Lat, +Lng);
                    $('#map').addClass('position');
                });
            }
        }
    });
}
var map;
var marker;
function initMap(Lat = 50.12, Lng = 26.12) {
    var location = { lat: Lat, lng: Lng };
    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 17
    });
    marker = new google.maps.Marker({ position: location, map: map });
}