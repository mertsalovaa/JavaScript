// window.onload = init;

// function init() {
//     let container = document.querySelector(".container");
// setTimeout(()=>{container.classList.add(".shadow");
// container.querySelector(".spinner").classList.add("spinner-load");
// }, 1000);

// setTimeout(()=>{
//     container.children[0].classList.remove("spinner-load");
//     container.className = "";
// }, 6000);

// setInterval(blinkElement, 100);

// }

// function blinkElement() {
//     let h1 = document.querySelector("h1");
//     h1.hidden = !h1.hidden;
// }

let ID = 1;
document.querySelector("input[type='button'").onclick = getData;
var users = [{
    ID: "ID",
    Name: "Name",
    Email: "Email",
    Tel: "Tel",
    Message: "Message"
}];
function getData() {
    let name = document.querySelector("input[type='text'").value;
    let email = document.querySelector("input[type='email'").value;
    let tel = document.querySelector("input[type='tel'").value;
    let msg = document.querySelector("textarea").value;

    const user = {
        id: ID++,
        Name: name,
        Email: email,
        Tel: tel,
        Message: msg
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
    printUsers(users);
}

let table;
table = document.createElement("table");
function printUsers() {
    if (!document.body.contains(table)) {
        document.body.append(table);
    }

    table = document.querySelector("table");

    while (table.children.length > 0) {
        table.children[0].remove();
    }
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr");
        for (let item in users[i]) {
            let td = document.createElement("td");
            td.innerText = users[i][item];
            tr.append(td);
        }
        table.append(tr)
    }
}

window.onload = () => {
    let data = localStorage.getItem("users");
    if (data != null) {
        ID = users.length;
        users = JSON.parse(data);
        printUsers(users);
    }
}