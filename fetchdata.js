let part2 = document.getElementById("container2");
let fetchbutton = document.getElementById("button1");


let heading = document.getElementById("title1");
let bodycontent = document.getElementById("bodycontent");
let idnum = document.getElementById("idnumber");
let unordered = document.getElementById("unordered");
//let lista = document.getElementsByClassName("liststyle");

//function changing_background(listid) {
//    let value = document.getElementById(listid);
//    value.style.backgroundColor = "pink";
 //   console.log(value)
//}


function displaying_the_array(arr1) {

    let {body, id, title} = arr1;

    let listid = "list" + id;

    let list1= document.createElement("li");
    list1.classList.add("liststyle");
    list1.id = listid;
    //list1.addEventListener("blur", changing_background(listid))
    unordered.appendChild(list1);

    let container1 = document.createElement("div");
    container1.classList.add("container1class");
    list1.appendChild(container1);

    let heading2 = document.createElement("h3");
    heading2.textContent = title;
    container1.appendChild(heading2);

    let paragraph = document.createElement("h5");
    paragraph.textContent = body;
    container1.appendChild(paragraph);

    

    let container3 = document.createElement("div");
    container3.classList.add("container3class")
    list1.appendChild(container3);


    let idnumber = document.createElement("p");
    idnumber.textContent = id;
    idnumber.classList.add("idclass");
    container3.appendChild(idnumber);
    

    }




fetchbutton.onclick = function() {
    console.log("fetching started");

    const object1 = new XMLHttpRequest();

    object1.onload = function() {
        let stringfiedobj = JSON.parse(this.responseText);
        console.log(stringfiedobj);

        stringfiedobj.map((eachobject) =>  displaying_the_array(eachobject) );


    }

    object1.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    object1.send();

}