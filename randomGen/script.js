const passwordShow = document.getElementById("password");


let length = 8;
const alphabets = "qwertyuiopasdfghjklzxcvbnm";
const upperCase = alphabets.toUpperCase();
const lowerCase = alphabets.toLowerCase();
const integers = "1234567890";
const symbols = "_+{}<>?/@#$%^&"

let allChar = upperCase + lowerCase + integers+symbols;

function generator(){
    let password = "";

    while (length > password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }

    passwordShow.value = password;
    
}

function copy(){
    passwordShow.select();
    document.execCommand("copy");
}



