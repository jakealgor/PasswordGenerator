
function password(){

    let complexity = document.getElementById("slider").value;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;
    document.getElementById("lastNums").innerHTML += password + "<br />";
}

document.getElementById("length").innerHTML = "Length: 29";
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 8){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 8";
    }

}

function copy(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied!");
}