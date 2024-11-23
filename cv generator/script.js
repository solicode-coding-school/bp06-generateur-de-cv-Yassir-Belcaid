function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Insert here");
    
    let weObj = document.getElementById("we");
    weObj.insertBefore(newNode, weObj.lastChild);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "eqField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Insert here");
    
    let aqObj = document.getElementById("aq");
    aqObj.insertBefore(newNode, aqObj.lastChild);
}

function generateCV() {
    
    let name = document.getElementById("nameField").value;
    let contact = document.getElementById("contactField").value;
    let address = document.getElementById("addressField").value;
    let fb = document.getElementById("fbField").value;
    let ig = document.getElementById("igField").value;
    let inLink = document.getElementById("inField").value;
    let objective = document.getElementById("objField").value;

    
    document.getElementById("nameT1").innerHTML = name;
    document.getElementById("nameT2").innerHTML = name;
    document.getElementById("contactT").innerHTML = contact;
    document.getElementById("addressT").innerHTML = address;
    document.getElementById("fbT").innerHTML = fb;
    document.getElementById("igT").innerHTML = ig;
    document.getElementById("inT").innerHTML = inLink;
    document.getElementById("objT").innerHTML = objective;

    // Work Experience
    let weList = "";
    let wes = document.getElementsByClassName("weField");
    for (let exp of wes) {
        weList += `<li>${exp.value}</li>`;
    }
    document.getElementById("weT").innerHTML = weList;

    // Academic Qualifications
    let aqList = "";
    let aqs = document.getElementsByClassName("eqField");
    for (let qlfy of aqs) {
        aqList += `<li>${qlfy.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = aqList;

    //  image
    let file = document.getElementById("imgField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
        document.getElementById("imgTemplate").src = reader.result;
    };

    // tmsa7 li f html o ban jdid
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}


function printCV() {
    window.print();
}
