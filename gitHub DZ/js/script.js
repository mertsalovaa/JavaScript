let url;
let otherUrl;
let search;

function getData() {
    document.querySelector('#city').innerText = '';
    search = document.querySelector('#search');
    url = `https://api.github.com/users/`;
    $.ajax({
        url: url + search.value,
        type: 'GET',
        success: ((responce) => {
            let marker = document.createElement('i');
            marker.className = 'fas fa-map-marker-alt';

            document.querySelector('.container').style.visibility = 'visible';

            document.querySelector('#avatar').src = responce.avatar_url;
            if (responce.name == null) {
                document.querySelector('#name').innerText = responce.login;
            }
            else {
                document.querySelector('#name').innerText = responce.name;
            }

            document.querySelector('#login').innerText = responce.login;

            document.querySelector('#url').innerText = responce.html_url;
            document.querySelector('#url').href = responce.html_url;
            if (responce.location == null) {
                document.querySelector('#city').append(marker);
                document.querySelector('#city').append(' NoLocation');
            }
            else {
                document.querySelector('#city').append(marker);
                document.querySelector('#city').append(' ' + responce.location);
            }
            if (responce.location == null) {
                document.querySelector('#email').innerText = 'NoEmail';
            }
            else {
                document.querySelector('#email').innerText = responce.email;
            }

            $.ajax({
                url: url + search.value + '/followers',
                type: 'GET',
                success: ((responce2) => {
                    if (responce2.length == 0) {
                        document.querySelector('#followers').innerText = 'NoFollowers';
                    }
                    else {
                        document.querySelector('#followers').innerText = responce2.length;
                    }
                })
            });
            $.ajax({
                url: url + search.value + '/following',
                type: 'GET',
                success: ((responce2) => {
                    if (responce2.length == 0) {
                        document.querySelector('#following').innerText = 'NoFollowing';
                    }
                    else {
                        document.querySelector('#following').innerText = responce2.length;
                    }
                })
            });
        }),
        statusCode: {
            404: function () {
                let error = document.createElement('h1');
                error.style.textAlign = 'center';
                error.innerText = '!404!\n';
                error.innerHTML += '\n User NOT FOUND!';
                document.querySelector('.error').append(error);
            }
        }
    });
}