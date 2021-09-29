let username1 = document.getElementById("username");
let password1 = document.getElementById("password1");
let loginbtn = document.getElementById("loginbutton");




loginbtn.onclick = function() {

    const details = {

        email: username1.value,
        password : password1.value
    };



    let stringifiedvalue = JSON.stringify(details);

    console.log(stringifiedvalue);

    let obj1 = new XMLHttpRequest();

    obj1.onload = function() {
        console.log(JSON.parse(this.responseText));
    }

    obj1.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    
    obj1.send();

}
