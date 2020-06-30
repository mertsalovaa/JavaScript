var text2 = document.getElementById('text2');
function SendText() {
    let text1 = document.getElementById('text1').value;
    document.getElementById('text2').value = text1;
    text2.value = text1;
}

function StyleText() {
    let res = document.querySelector('.resDiv');
    let form = document.querySelector('form');
    let p = res.children[0];
    console.dir(res.children);
    p = text2.value;
    if (form[0].checked) {
        res.style.fontWeight = form[0].value;
    }
    if(form[1].checked) {
        res.style.textDecorationLine = form[1].value;
    }
    if (form[2].checked) {
        res.style.fontStyle = form[2].value;
    }
    if(form[3].checked) {
        res.style.textAlign = form[3].value;
    }
    if(form[4].checked) {
        res.style.textAlign = form[4].value;
    }
    if(form[5].checked) {
        res.style.textAlign = form[5].value;
    }
    res.append(p);
}