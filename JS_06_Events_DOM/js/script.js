document.body.onclick = function (event) {
    document.querySelector("h1").innerText = `You click on ${event.target.nodeName}`;
}

document.body.addEventListener("click", function (event) {
    this.querySelector(".red").style.cssText = `left: ${event.clientX}px;
    top: ${event.clientY}px`;
});

document.querySelector(".blue").addEventListener("mousemove", function (event) {
    this.style.backgroundColor = `rgb(${event.clientX}, ${event.pageX}, ${event.pageY})`;
});

document.querySelector("h1").addEventListener("mousedown", function (event) {
    let bg = "";
    // console.dir(event);
    switch (event.which) {
        case 1:
            bg = "purple"
            break;
        case 2:
            bg = "olive"
            break;
        case 3:
            bg = "orange"
            break;

    }
    this.style.backgroundColor = bg;
});

document.querySelector("h1").oncontextmenu = function () { return false };

// keydown ,  keyup ,  keypress

document.body.onkeydown = function (event) {
    let text = "";
    if (event.ctrlKey) {
        text += "ctrl +";
    }
    else if (event.altKey) {
        text += "alt +";
    }
    else if (event.shiftKey) {
        text += "shift +";
    }
    text += " " + event.key;

    document.querySelector("h1").innerText = text;
    // event.preventDefault();
};

// document.querySelectorAll("input").forEach((x) => x.onfocus = function () {
//     this.setAttribute("focused", "true");
// });

// document.querySelectorAll("input").forEach((x) => x.onblur = function () {
//     this.removeAttribute("focused");
// });

document.querySelectorAll("input").forEach((x) => x.onfocus = function () {
    this.dataset.focused = "true";
});

document.querySelectorAll("input").forEach((x) => x.onblur = function () {
    this.removeAttribute("data-focused");
});