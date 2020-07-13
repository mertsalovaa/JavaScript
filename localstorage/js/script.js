var ID = 1;
var data = [];
var users = [];

let blocks;

let confirmn = document.querySelector("#arrow");

let save = document.querySelector(".save");
let btn = document.getElementById("btn").onclick = function (event) {
    blocks = document.getElementsByClassName("block1");
    for (let i = 0; i < blocks.length; i++) {
        event.preventDefault();
        blocks[i].classList.toggle("block1");
        blocks[i++].classList.toggle("block1");
        console.log(data);
    }
}

save.addEventListener('click', Register);
console.log(data);
confirmn.addEventListener('click', SignIn);

function Register(event) {
    event.preventDefault();
    console.log(users);

    var Name = document.getElementById("name").value;
    let Email = document.querySelector("input[type='email'").value;
    let Login = document.getElementById("login").value;
    var Password = document.querySelector("input[type='password'").value;

    let user = {
        id: ID++,
        name: Name,
        email: Email,
        login: Login,
        password: Password
    };

    console.log(users);
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    data = JSON.parse(localStorage.getItem('users'));
    alert("It's okay!");
    if (event.target.value == 'SignIn') {
        location.href = './mainWindow.html';
    }
    else {
        return;
    }
}
function SignIn(event) {
    event.preventDefault()
    location.href = "./mainWindow.html";

}