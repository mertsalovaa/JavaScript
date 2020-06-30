// document.querySelector("button").onclick = Click;
// function Click() {
//     let redirect = document.querySelector("input").value;
//     if (redirect.split("https://").length == 1) {
//         redirect = "https://" + redirect;
//     }
//     // location.href = redirect;
//     window.open(redirect);
// }

// let btn = document.querySelector("div").nextElementSibling;
// btn.onclick = () => {
//     let block = document.querySelector(".block");
//     let clientLeft = block.clientLeft;
//     let clientTop = block.clientTop;

//     let p = document.createElement("p");
//     p.innerHTML = `<b>ClientLeft:</b> ${clientLeft}; <b>ClientTop:</b> ${clientTop};`;
//     btn.after(p);

//     let clientWidth = block.clientWidth;
//     let clientHeight = block.clientHeight;
//     p = document.createElement("p");
//     p.innerHTML = `<b>ClientHeight:</b> ${clientHeight}; <b>ClientWidth:</b> ${clientWidth};`;
//     btn.after(p);


//     let offsetWidth = block.offsetWidth;
//     let offsetHeight = block.offsetWidth;
//     p = document.createElement("p");
//     p.innerHTML = `<b>OffsetWidth:</b> ${offsetWidth}; <b>OffsetHeight:</b> ${offsetHeight};`;
//     btn.after(p);


//     let scrollWidth = block.scrollWidth;
//     let scrollHeight = block.scrollHeight;
//     p = document.createElement("p");
//     p.innerHTML = `<b>ScrollWidth:</b> ${scrollWidth}; <b>ScrollHeight:</b> ${scrollHeight};`;
//     btn.after(p);


//     let scrollLeft = block.scrollLeft;
//     let scrollTop = block.scrollTop;
//     p = document.createElement("p");
//     p.innerHTML = `<b>scrollLeft:</b> ${scrollLeft}; <b>scrollTop:</b> ${scrollTop};`;
//     btn.after(p);


//     let offsetLeft = block.offsetLeft;
//     let offsetTop = block.offsetTop;
//     p = document.createElement("p");
//     p.innerHTML = `<b>OffsetTop:</b> ${offsetTop}; <b>OffsetLeft:</b> ${offsetLeft};`;
//     btn.after(p);
// };

let btn = document.querySelector("button");
window.onscroll = () => {
    let header = document.querySelector("header");
    let heightHeader = header.offsetHeight;

    if (window.pageYOffset > heightHeader) {
        header.nextElementSibling.classList.add("fixed");
    }
    else {
        header.nextElementSibling.classList.remove("fixed");

    }
    if (window.pageYOffset>(document.body.scrollHeight/2)) {
        btn.style.display = "block";
    }
}



btn.onclick = Click;
function Click() {    
    window.scrollTo(0, 0);
    this.style.display = "none";
}