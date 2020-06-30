let Url = 'https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=';
let mainDiv = $('.main');
let input = $('input');
function SearchInfo() {
    

    // console.log(getData(input));
    //     for(let i = 0; i< object; i++) {
    //         let h2 = $(mainDiv).append(document.createElement("h2"));
    // h2.text = object[i].cityUA;
    //     }

}

function getData() {
    $.ajax({
        url: Url + input.val(),
        type: 'GET',
        success: (responce) => {
            
            if (responce.devices.find((el) => { return el.cityRU == input.val(); })) {
                console.log('Good');
            };
            console.log(responce);
            for (let i = 0; i < responce.length; i++) {
                // let h2 = $(mainDiv).append(document.createElement("h2"));
                // h2.text(responce[i].cityUA);
                $(mainDiv).html('<h2>responce[i].cityUA</h2>');
            }
        }
    });

}
