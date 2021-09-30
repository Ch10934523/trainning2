let unorder = document.getElementById("unorderlist");
let addbtn = document.getElementById("addbutton");
let inputel = document.getElementById("inputtab");

let arr1 = [];

function deleting_the_task(listid) {
    //console.log(deliconid);

    let listelement = document.getElementById(listid);
    console.log(listelement);
    unorder.removeChild(listelement);
}

function displaying_the_task(inputvalue, id) {

    //console.log(inputvalue);
    let listid = "list" + id;
    let deliconid = "del" + id;
    
    console.log(deliconid);
    console.log(listid);

    let list1= document.createElement("li");
    list1.classList.add("listcontainer");
    list1.id = listid;
    unorder.appendChild(list1);

    let heading1 = document.createElement("h4");
    heading1.textContent = inputvalue;
    heading1.classList.add("content");
    list1.appendChild(heading1);

    let iconcontainer = document.createElement("div");
    list1.appendChild(iconcontainer);

    let iconcross = document.createElement("i");
    iconcross.classList.add("fa", "fa-times", "sizeicon");
    
    iconcross.id = deliconid;
    iconcross.onclick = function() {
        deleting_the_task(listid);
    }
    iconcontainer.appendChild(iconcross);

}



addbtn.onclick = function() {
    let inputvalue = inputel.value;
    if (inputvalue === ""){
        alert("Please Enter a Valid Text");
    }
    //console.log(inputvalue);
    else {
        arr1.push(inputvalue);
        let len1 = arr1.length;
        console.log(len1);
        inputel.value = "";
        displaying_the_task(inputvalue, len1);

}
}



