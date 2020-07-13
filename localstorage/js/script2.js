let users = [];
let header = document.querySelector('header');
window.onload = function () {
    users = JSON.parse(localStorage.getItem('users'));
    console.log(users);
    let avatar = document.createElement('div');
    for (let i = 0; i < users.length; i++) {
        avatar.innerText = users[i].name.charAt(0);
        document.querySelector('h2').innerText += ' ' + users[i].name + ' !';
        document.querySelector('#name').innerText = users[i].name;
        document.querySelector('#login').innerText = users[i].login;
        document.querySelector('#email').innerText = users[i].email;
        document.querySelector('#password').innerText = users[i].password;
        header.append(avatar);
        avatar.addEventListener('click', function () {
            document.querySelector('.info').classList.toggle('display');
        });
    }
}