var ID = 1;
var users = [];
let localUsers = [];
let blocks;
let save = document.getElementById("arrow").onclick = Function1;
let btn = document.getElementById("btn").onclick = function (event) {
    blocks = document.getElementsByClassName("block1");
    for (let i = 0; i < blocks.length; i++) {
        event.preventDefault();
        blocks[i].classList.toggle("block1");
        blocks[i++].classList.toggle("block1");
    }
}

function SearchUser(login, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].login == login && users[i].password == password) {
            return true;
        }
        return false;
    }
}

function Function1() {
    // event.preventDefault();

    // users = [{ id: ID++, name: "Iryna", email: "irynamertsalova@gmail.com", login: "mertsalovaa", password: "1111" }];

    var Name = document.getElementById("name").value;
    let Email = document.querySelector("input[type='email'").value;
    let Login = document.getElementById("login").value;
    var Password = document.querySelector("input[type='password'").value;

    // if (SearchUser(Name, Password) == false) {
    let user = {
        id: ID++,
        name: Name,
        email: Email,
        login: Login,
        password: Password

    };
    for (let i = 0; i < users.length; i++) {
        if (users[i].login == Login) {
            users.push(user);
        }
        else {
            localStorage.setItem("users", JSON.stringify(users));
            event.preventDefault();
            location.href = "mainWindow.html";
        }
    }


    // else if (SearchUser(Login, Password) == true) {
}


window.onload = function () {
    let data = localStorage.getItem("users");
    if (data != null) {
        ID = data.length;
        users = JSON.parse(data);
    }
}