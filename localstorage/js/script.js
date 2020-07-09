var ID = 1;
var data = [];
var users = [];
// window.onload = () => {
//     if (localStorage.length != 0) {
//         users = localStorage.getItem("users");
//         JSON.parse(localStorage.getItem("users"));
//         // localStorage.setItem('users', JSON.stringify(users));
//     }
// }

let blocks;

let confirmn = document.querySelector("#arrow");

let save = document.querySelector(".save");
let btn = document.getElementById("btn").onclick = function (event) {
    blocks = document.getElementsByClassName("block1");
    for (let i = 0; i < blocks.length; i++) {
        event.preventDefault();
        blocks[i].classList.toggle("block1");
        blocks[i++].classList.toggle("block1");

    }
    // this.style.display = 'none';
}

save.addEventListener('click', Register);
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
}

// function SearchUser(login, password) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].login == login && users[i].password == password) {
//             return true;
//         }
//         return false;
//     }
// }

function SignIn(event) {
    console.log("click");
    data.forEach(item => {
        // if (item.login == Name && item.password == Password) {
            location.href = "../mainWindow.html";
            event.preventDefault();
        // alert(item.login);
        // }
        // else {
        //     alert("Fault");
        // }
    });
    // for (let i = 0; i < users.length; i++) {
    //     if (SearchUser(users[i].login, users[i].password)) {
    //         event.preventDefault();
    //     }
    //     else {
    //         alert("Not yhis user in localStorage");
    //     }
    // }
}

// blocks = document.getElementsByClassName("block1");
// for (let i = 0; i < blocks.length; i++) {
//     event.preventDefault();
//     blocks[i].classList.add("block1");
//     blocks[i++].classList.add("block1");
// }
// btn.style.display = 'block';


// window.onload = () => {
    //     let data = localStorage.getItem("users");
    //     if (data != null) {
        //         ID = data.length;
        //         users = JSON.parse(data);
        //     }
        // }
        // for (let i = 0; i < localStorage.users.length; i++) {
            //     if (localStorage.users[i].login == Login) {
                //         users.push(user);
                //     }
                //     else {
                    //         localStorage.setItem("users", JSON.stringify(users));
                    //         event.preventDefault();
                    //     }
                    // }


                    // // else if (SearchUser(Login, Password) == true) {


