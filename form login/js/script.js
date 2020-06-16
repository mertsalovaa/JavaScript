document.querySelector("input[type='checkbox'").addEventListener("change", function () {
    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");

    if (password1.value == password2.value) {
        if (this.checked) {

            document.querySelector("input[type='button'").removeAttribute("disabled");
        }
        else {
            document.querySelector("input[type='button'").setAttribute("disabled", "true");
        }
    }
    else {
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
        password1.style.borderWidth = "1.5px";
        password2.style.borderWidth = "1.5px";
    }
});

document.querySelector("input[type='button").addEventListener("click", function () {
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    let email = document.querySelector("input[type='email'");
    let checkbox = document.querySelector("input[type='checkbox'");

    if (text1.value == "" || text2.value == "" || email.value == "" || password1.value == "" || password2.value == "") {

        password1.style.borderColor = "red";
        password1.style.borderWidth = "1.5px";
        password2.style.borderColor = "red";
        password2.style.borderWidth = "1.5px";
        text1.style.borderColor = "red";
        text1.style.borderWidth = "1.5px";
        text2.style.borderColor = "red";
        text2.style.borderWidth = "1.5px";
        email.style.borderColor = "red";
        email.style.borderWidth = "1.5px";
        checkbox.setAttribute("checked", "false");
    }
    else {
        password1.style.borderColor = "lightgray";
        password1.style.borderWidth = "1px";
        password2.style.borderColor = "lightgray";
        password2.style.borderWidth = "1px";
        text1.style.borderColor = "lightgray";
        text1.style.borderWidth = "1px";
        text2.style.borderColor = "lightgray";
        text2.style.borderWidth = "1px";
        email.style.borderColor = "lightgray";
        email.style.borderWidth = "1px";

        document.getElementById("one").innerText = text1.value;
        document.getElementById("two").innerText = text2.value;
        document.getElementById("three").innerText = SearchGender();
        document.getElementById("four").innerText = email.value;


        function SearchGender() {
            let temp = document.querySelectorAll("input[type='radio']");
            let temp2 = "male"
            for (let i = 0; i < 2; i++) {
                if (temp[i].checked) {
                    return temp2 = temp[i].value;
                }
            }
        }
    }
});