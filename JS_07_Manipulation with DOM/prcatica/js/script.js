// document.querySelector("input[type='number'").onclick.p

// 2 
let btn = document.querySelector("input[type='button'").onclick = function () {

    for (let i = 0; i < 10; i++) {
        let coloredBlock = document.createElement("div");
        let red = getRandom(1, 255).toFixed();
        let green = getRandom(1, 255).toFixed();
        let blue = getRandom(0, 1).toFixed();
        coloredBlock.style.width = "60px";
        coloredBlock.style.height = "100px";
        coloredBlock.style.backgroundColor = `rgba(${red})`;
        document.getElementsByClassName(".coloredBlock").append(coloredBlock);
    }
};

function getRandom(min, max) {
    return Math.trunc((Math.random() * (max - min)) + min);
}