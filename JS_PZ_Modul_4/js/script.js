document.querySelector('#number').addEventListener('keydown', function (event) {
    event.preventDefault();
});

function getRandom(min, max) {
    return Math.trunc((Math.random() * (max - min)) + min);
}
let blocks = document.querySelector(".blocks");
function CreateBlock() {
    let coloredBlock = document.createElement("button");
    let red = getRandom(1, 255).toFixed();
    let green = getRandom(1, 255).toFixed();
    let blue = getRandom(1, 255).toFixed();
    coloredBlock.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 1)`;
    coloredBlock.addEventListener('click', function () {
        document.querySelector('#lorem').style.color = coloredBlock.style.backgroundColor;
        this.remove();
    });
    blocks.append(coloredBlock);
};

let com = document.querySelector('.comments');

function CreateComment() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let comment= document.createElement('h3');
    let myName = document.querySelector('#name');
    let myComment = document.querySelector('#comm');

    comment.innerText += `<${myName.value}\n`;
    comment.innerText += `${day}/${month}/${year}\n`;
    comment.innerText += `${myComment.value}\n`;
    alert(comment);

    com.append(comment);
}