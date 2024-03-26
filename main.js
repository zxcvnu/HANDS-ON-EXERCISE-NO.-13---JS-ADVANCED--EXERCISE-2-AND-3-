const btnInsertUpdate = document.getElementById("btnInsertUpdate");
const btnClearItems = document.getElementById("btnClearItems");
const btnClear = document.getElementById("btnClear");
const tblRecords = document.getElementById("tblRecords");
const btn1Label = document.getElementById("btn1-label");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

let arrRecords = new Array();
const tblTHsLabels = ["First Name", "Middle Name", "Last Name", "Age", "Action"];

btnInsertUpdate.addEventListener("click", () => {
    const inputTxt = document.getElementsByTagName("input");
    if(btnInsertUpdate.value == "insert") {
        for(const txt of inputTxt) {
            if(txt.value == " " || txt.value == "") {
                alert("Please complete all the text inputs!");
                return;
            }
        }
        let infoRecord = {
            fname: inputTxt[0].value,
            mname: inputTxt[1].value,
            lname: inputTxt[2].value,
            age:   parseInt(inputTxt[3].value)      
        };
        for(const txt of inputTxt) {
            txt.value = "";
        }
        arrRecords.push(infoRecord);
        generateData();
        sortData();
    
    } else {
        for(const txt of inputTxt) {
            if(txt.value == " " || txt.value == "") {
                alert("Please complete all the text inputs!");
                return;
            }
        }
        arrRecords[parseInt(btnInsertUpdate.value)].fname = inputTxt[0].value;
        arrRecords[parseInt(btnInsertUpdate.value)].mname = inputTxt[1].value;
        arrRecords[parseInt(btnInsertUpdate.value)].lname = inputTxt[2].value;
        arrRecords[parseInt(btnInsertUpdate.value)].age = parseInt(inputTxt[3].value)  ;
        generateData();
        sortData();
        for(const txt of inputTxt) {
            txt.value = "";
        }
        btnInsertUpdate.innerHTML = "Insert";
        btnInsertUpdate.value = "insert";
    }
});


btn3.addEventListener("click", () => {
    localStorage.setItem("localStorage", JSON.stringify(arrRecords));
    alert("Records Saved!");
});


if (localStorage.getItem("localStorage")) {
    arrRecords = JSON.parse(localStorage.getItem("localStorage"));
    generateData();
} else {
    document.getElementById("status").innerText = "No Records...";
    document.getElementById("btn1-label").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";
    document.getElementById("btnClearItems").style.display = "none";
}

btn1.addEventListener("change", () => {
    const sortType = parseInt(btn1.value);
    const sortOrder = parseInt(btn2.value);

    if (sortOrder && !isNaN(sortType)) {
        if (sortType === 1) {
            if (sortOrder === 1) {
                arrRecords.sort((a, b) => a.fname.localeCompare(b.fname)); 
            } else {
                arrRecords.sort((a, b) => b.fname.localeCompare(a.fname));
            }
        } else if (sortType === 2) {
            if (sortOrder === 1) {
                arrRecords.sort((a, b) => a.lname.localeCompare(b.lname)); 
            } else {
                arrRecords.sort((a, b) => b.lname.localeCompare(a.lname)); 
            }
        }
        generateData();
    }
});

btn2.addEventListener("change", () => {
    const sortType = parseInt(btn1.value);
    const sortOrder = parseInt(btn2.value);

    if (sortType && !isNaN(sortOrder)) { 
        if (sortType === 1) {
            if (sortOrder === 1) {
                arrRecords.sort((a, b) => a.fname.localeCompare(b.fname)); 
            } else {
                arrRecords.sort((a, b) => b.fname.localeCompare(a.fname)); 
            }
        } else if (sortType === 2) {
            if (sortOrder === 1) {
                arrRecords.sort((a, b) => a.lname.localeCompare(b.lname)); 
            } else {
                arrRecords.sort((a, b) => b.lname.localeCompare(a.lname)); 
            }
        }
        generateData();
    }
});

function sortData() {
    const sortType = parseInt(btn1.value);
    const sortOrder = parseInt(btn2.value);

    if (!isNaN(sortType) && !isNaN(sortOrder)) {
        if (sortType === 1) {
            if (sortOrder === 1) {
                arrRecords.sort((a, b) => a.fname.localeCompare(b.fname)); 
            } else {
                arrRecords.sort((a, b) => b.fname.localeCompare(a.fname)); 
            }
        } else if (sortType === 2) {
            if (sortOrder === 1) {
                arrRecords.sort((a, b) => a.lname.localeCompare(b.lname)); 
            } else {
                arrRecords.sort((a, b) => b.lname.localeCompare(a.lname));  
            }
        }
        generateData(); 
    }
}


btnClear.addEventListener("click", () => {
    const inputTxt = document.getElementsByTagName("input");
    for(const txt of inputTxt) {
        txt.value = "";
    }
    btnInsertUpdate.innerHTML = "Insert";
    btnInsertUpdate.value = "insert";
});

btnClearItems.addEventListener("click", () => {
    arrRecords = [];
    while(tblRecords.hasChildNodes()) {
        tblRecords.removeChild(tblRecords.firstChild);
    }
    document.getElementById("status").style.display = "inline";
    document.getElementById("status").innerHTML = "No Records...";
    document.getElementById("btn1-label").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";
    document.getElementById("btnClearItems").style.display = "none";
    btnInsertUpdate.innerHTML = "Insert";
    btnInsertUpdate.value = "insert";
    localStorage.removeItem("localStorage");
});



function deleteData(i) {
    arrRecords.splice(i,1);
    generateData();
}

function updateData(i) {
    const inputTxt = document.getElementsByTagName("input");

    inputTxt[0].value = arrRecords[i].fname;
    inputTxt[1].value = arrRecords[i].mname;
    inputTxt[2].value = arrRecords[i].lname;
    inputTxt[3].value = arrRecords[i].age;

    btnInsertUpdate.innerHTML = "Update";
    btnInsertUpdate.value = `${i}`;
}


function generateData() {
    while(tblRecords.hasChildNodes()) {
        tblRecords.removeChild(tblRecords.firstChild);
    }

    if(!(arrRecords.length == 0)) {
        document.getElementById("status").style.display = "none";
        document.getElementById("btn1-label").style.display = "inline";
        document.getElementById("btn1").style.display = "inline";
        document.getElementById("btn2").style.display = "inline";
        document.getElementById("btn3").style.display = "inline";
        document.getElementById("btnClearItems").style.display = "inline";

        const tblHeaderRow = document.createElement("tr");
        const tblHeader = document.createElement("thead");
        tblHeaderRow.style.borderTop = "1px solid black";
        tblHeaderRow.style.borderBottom = "1px solid black";

        //Generate 5 Theads
        for(let i=0 ; i < 5 ; i++) {
            const tblTHs = document.createElement("th");
            tblTHs.style.padding = "5px";
            if(i != 4) {
                tblTHs.style.borderRight = "1px solid black";
            }
            tblTHs.innerHTML = tblTHsLabels[i];
            tblHeaderRow.appendChild(tblTHs);
        }
        tblHeader.appendChild(tblHeaderRow);
        tblRecords.appendChild(tblHeader);
        //Generate Records
        const tblBody = document.createElement("tbody");
        arrRecords.forEach((rec, i)=> {
            const tblRow = document.createElement("tr");
            const tbdataFname = document.createElement("td");
            const tbdataMname = document.createElement("td");
            const tbdataLname = document.createElement("td");
            const tbdataAge= document.createElement("td");
            const tbdataActionBtn= document.createElement("td");
            const btnDelete = document.createElement("button");
            const btnUpdate = document.createElement("button");
            
            tbdataFname.style.borderRight = "1px solid black";
            tbdataFname.style.padding = "10px";

            tbdataMname.style.borderRight = "1px solid black";
            tbdataMname.style.padding = "10px";

            tbdataLname.style.borderRight = "1px solid black";
            tbdataLname.style.padding = "10px";

            tbdataAge.style.borderRight = "1px solid black";
            tbdataAge.style.padding = "10px";

            tbdataActionBtn.style.padding = "10px";

            tblRow.style.borderBottom = "1px solid black";

            tbdataFname.innerHTML = rec.fname;
            tbdataMname.innerHTML = rec.mname;
            tbdataLname.innerHTML = rec.lname;
            tbdataAge.innerHTML = rec.age;

            btnDelete.innerHTML = "Delete";
            btnDelete.setAttribute("onclick", `deleteData(${i})`);
            btnDelete.style.marginRight = "5px";

            btnUpdate.innerHTML = "Edit";
            btnUpdate.setAttribute("value", "update");
            btnUpdate.setAttribute("onclick", `updateData(${i})`);
            btnUpdate.style.marginRight = "5px";

            tbdataActionBtn.appendChild(btnDelete);
            tbdataActionBtn.appendChild(btnUpdate);

            tblRow.appendChild(tbdataFname);
            tblRow.appendChild(tbdataMname);
            tblRow.appendChild(tbdataLname);
            tblRow.appendChild(tbdataAge);
            tblRow.appendChild(tbdataActionBtn);

            tblBody.appendChild(tblRow);
        });
        tblRecords.appendChild(tblBody);
    } else {
        document.getElementById("status").style.display = "inline";
        document.getElementById("status").innerHTML = "No Records...";
    }
}