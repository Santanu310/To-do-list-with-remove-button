let studenFirstName = ""
let studenLastName = ""
let studentClass = ""
let studentRoll = ""

const handleFirstName = (e) => studenFirstName = e
const handleLastName = (e) => studenLastName = e
const handleClass = (e) => studentClass = e
const handleRollNo = (e) => studentRoll = e


const getInput = () => {

    const date = new Date();
    console.log(studenFirstName)
    console.log(studenLastName)
    console.log(studentClass)
    console.log(studentRoll)
    let a = 1;

    let div = document.createElement("div");
    div.setAttribute("class", "list-item");

    listHtml = `
        <p>
                    <span>${a=a+1}</span> <br> 
                    Student Name : ${studenFirstName} ${studenLastName}
                    <br>
                    Student Class : ${studentClass}
                    <br>
                    Student Roll : ${studentRoll}
                </p>
                <div class="list-btn-group">
                    <a href="" target="_blank">See More</a>
                    <button class="deleteBtn" id="deleteBtn">DELETE</button>
                </div>
    `;

    div.innerHTML = listHtml;

    document.getElementById("notes-list").appendChild(div);

    document.getElementsByClassName("list-btn-group").appendChild(div);



    // function myFunction() {
    //     var myObj = document.createElementById("list-item");
    //     myObj.remove();
    // }

    document.getElementById("first").value = ""
    document.getElementById("last").value = ""
    document.getElementById("class").value = ""
    document.getElementById("roll").value = ""
}

const clickBtn = document.getElementById("addBtn").addEventListener("click", getInput)

const deleterBtn = document.getElementById("deleteBtn").addEventListener("click", getInput)