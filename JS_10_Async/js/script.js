// window.setTimeout(() => {
//     alert("hello timer");

// }, 3000);

// let i = 0;
// let interval = setInterval(() => { 
//     console.log(i++) 
// }, 1000);

// setTimeout(() => { 
//     clearInterval(interval) 
// }, 5000);


// Client (inddex.html/css + script.js) -> Server (backend: php, python, asp.net) -> DataBase (SQL, MySql) -> Server -> Client

setTimeout(() => {
    console.log("Client: Give me users list...");

    // setTimeout(() => {
    //     console.log('Server: Ok. Request data in database...');

    //     setTimeout(() => {
    //         console.log('DB: Select * from users and send to server back...');

    //         setTimeout(() => {
    //             console.log('Server: Got. Transform. Send to client back...');

    //             setTimeout(() => {
    //                 console.log('Client: Got. Show data on page...');
    //             }, 1000)
    //         }, 500);
    //     }, 500)
    // }, 1000)
}, 1000);

//promise - object обгортка для асинхронного коду
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Server: Request data in database...');
        resolve();
    }, 1000)
});

promise.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = [{
                id: '1',
                name: 'Ira',
                surname: "Mertsalova"
            }, {
                id: '2',
                name: 'Ira',
                surname: "Mertsalova"
            }];
            console.log('DB: Select * from users and send to server back...', users);
            resolve(users);
        }, 500)
    })
}).then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = data.map((item) => {
                return {
                    usercode: item.id,
                    fullname: item.name + ' ' + item.surname
                }
            });
            console.log('Server: Got. Transform. Send to client back...', users);
            resolve(users);
        }, 500);
    })
}).then((data) => {

    setTimeout(() => {
        console.log('Client: Got. Show data on page...');
        let ul = document.createElement("ul");
        let li = data.map((item) => {
            return `<li>${item.fullname}</li>`;
        });
        console.log(li);
        ul.innerHTML = li.join(' ');
        document.querySelector("h1").after(ul);
    }, 1000);
}
)