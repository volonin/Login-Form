let form = document.forms[0];
let registration = document.querySelector(".registration");
let password = document.querySelector("#password");
let logIn = document.querySelector(".log-in");
let p = document.querySelector("#p");
let forgot = document.querySelector("#forgot");
let aimFon = document.querySelector(".img-fon");
let aimFon2 = document.querySelector(".img-fon2");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let body = document.querySelector("body");
let name;
let boolean = true;
let confirmPassword = document.querySelector("#confirmPassword");
let text1 = document.querySelectorAll(".text1");
let text2 = document.querySelectorAll(".text2");
let text3 = document.querySelectorAll(".text3");
let switches = document.querySelector(".switches");
text1.forEach(e => e.style.display = "block");
text2.forEach(e => e.style.display = "none");
text3.forEach(e => e.style.display = "none");
switches.addEventListener("click", function (e){
    let selected = document.querySelector(".selected");
    if (e.target.src){
        selected.src = "Img/2.png";
        selected.className = "";
        e.target.src = "Img/3.png";
        e.target.classList = "selected";
    }
    let array = new Array();
    for (i of switches.children){
        array.push(i);
    }
    switch (array.indexOf(e.target)){
        case 0: text1.forEach(e => e.style.display = "block");
            text2.forEach(e => e.style.display = "none");
            text3.forEach(e => e.style.display = "none");
            break;
        case 1: text2.forEach(e => e.style.display = "block");
            text1.forEach(e => e.style.display = "none");
            text3.forEach(e => e.style.display = "none");
            break;
        case 2: text3.forEach(e => e.style.display = "block");
            text2.forEach(e => e.style.display = "none");
            text1.forEach(e => e.style.display = "none");
            break;
    }

})
registration.addEventListener("click", function (e){
    name = registration.innerHTML;
    registration.innerHTML = logIn.value;
    logIn.value = name;
    if(registration.innerHTML === "Registration"){
        reg();
    }else{
        log();
    }
})
function reg(){
    p.innerHTML = "Have no account yet?";
    forgot.style.display = "block";
    logIn.style.marginTop = "25px"
    aimFon.style.top = "450px";
    aimFon2.style.top = "900px";
    aimFon.style.zIndex = "0";
    right.style.backgroundColor = "rgb(255,255,255)";
    body.style.backgroundColor = "#3949AB";
    left.style.backdropFilter = "blur(10px)";
    left.style.backgroundColor = "rgba(57,73,171,0.5)";
    confirmPassword.style.display = "none";
    boolean = true;
}
function log(){
    p.innerHTML = "Have an account?";
    forgot.style.display = "none";
    logIn.style.marginTop = "40px"
    aimFon.style.zIndex = "3";
    aimFon.style.top = "250px";
    aimFon2.style.top = "577px";
    right.style.backgroundColor = "rgba(255,255,255,0.5)";
    right.style.backdropFilter = "blur(10px)";
    left.style.backgroundColor = "rgb(57,73,171)";
    body.style.backgroundColor = "white";
    confirmPassword.style.display = "block";
    boolean = false;
}
confirmPassword.addEventListener("input", function (){
    if (confirmPassword.value !== password.value){
        console.log(confirmPassword.value, password.value)
        confirmPassword.setCustomValidity("Пароль не сопадает");
    }else{
        confirmPassword.setCustomValidity("");
    }
})
confirmPassword.addEventListener("input", function (){
    if (confirmPassword.value !== password.value){
        confirmPassword.style.borderBottom = "1px rgb(194, 194, 194)";
        password.style.borderBottom = "1px rgb(194, 194, 194)";
    }else if (password.value.length >= 6){
        confirmPassword.style.borderBottom = "3px solid #7ad97a";
        password.style.borderBottom = "3px solid #7ad97a";
    }
})