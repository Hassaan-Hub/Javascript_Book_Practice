// 1. Create a signup form and display form data in your web
// page on submission.


// function signUp(){
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;

//     document.getElementById("result").innerHTML += 
//     "Name: " + name + "<br>Email: " + email + "<br><br><br>";

// }




// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.


// function readMore(){
//     document.getElementById("para").innerHTML = `  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at
//       incidunt blanditiis, distinctio possimus molestiae, quis repellendus
//       mollitia voluptatem provident ex ipsa? Quos dolore non tenetur quasi
//       voluptatibus qui culpa!
//     `
// }




// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


function sumbitForm(){
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var grade = document.getElementById("grade");
    
    var inName = document.getElementById("inName");
    var inAge = document.getElementById("inAge");
    var inGrade = document.getElementById("inGrade");

    if(name.value === "" || age.value === "" || grade.value === ""){
        alert("Please fill all the fields");
        return;
    }

    var nameText = document.createTextNode(name.value);
    var ageText = document.createTextNode(age.value);
    var gradeText = document.createTextNode(grade.value);

    inName.appendChild(nameText);
    inAge.appendChild(ageText);
    inGrade.appendChild(gradeText);
    
    name.value = "";
    age.value = "";
    grade.value = "";
}

function deleteRow(button){
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}



