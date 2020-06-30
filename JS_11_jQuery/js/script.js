let test = $('div');

// test.each((elem) => {
//     console.log($(elem));
//     elem.css('background-color', 'violet');
// });

// test.addClass('one');
// console.log(test);

$('#test').addClass('one')
    .text('Hello from jQuery')
    .css({
        'text-align': 'center',
        'color': 'blue',
        'font-weight': 'bold'
    })
    .click(function () {
        // $(this).hide();
        $(this).css('padding', "15px")
            .toggleClass("one");
        $(this).attr('data-value', new Date().toLocaleDateString());
        let next = $(this).next();
        next.attr('id', 'custom');
        $(this).parent().css('background-color', 'gray');

        $(this).append(document.createElement('p'));
        console.log($(this).data('value'));
        let last = $(this).children().last();
        last.text($(this).data('value'))
        // $(this).text += $(this).data('value');
    });

$('#test').on('dblclick', function () {
    $(this).css('background-color', 'red');
    $(this).css('color', 'white');
    console.log('here');
});
// let tesst = document.getElementById('test');
// tesst.classList.add('one');
// tesst.innerText = "Hello from JS";
// tesst.style.textAlign= 'center';
// tesst.style.color= 'blue';
// tesst.style.fontWeight='bold';

// tesst.onclick = function () {
//     this.style.padding= '15px';
//     this.classList.toggle('one');
//     this.setAttribute('data-value', new Date().toLocaleDateString());
//     this.nextElementSibling.setAttribute('id', 'custom');
//     this.parentElement.style.backgroundColor = 'gray';
// };


// asynchronous java script and xml
// XmlHttpRequest

// get post
$.ajax({
    url: 'https://reqres.in/api/users/2',
    type: 'GET',
    success: (responce) => {
        console.log(responce);
    }
})

fetch('https://reqres.in/api/users/2').then(responce => {
    return responce.json();

}).then(data => {
    console.log(data);
});

getData();
async function getData() {
    let responce = await fetch('https://reqres.in/api/users/2');
    let data = await responce.json();
    console.log(data);
}