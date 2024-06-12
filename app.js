let cart = [];

function Patient(fullName, password, dob, gender, chronicDiseases, phoneNumber) {
    this.fullName = fullName;
    this.password = password;
    this.dob = dob;
    this.gender = gender;
    this.chronicDiseases = chronicDiseases;
    this.phoneNumber = phoneNumber;
}

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const chronicDiseases = document.getElementById('diseases').value;
    const phoneNumber = document.getElementById('phone').value;
    
    
    let patient = new Patient(fullName, password, dob, gender, chronicDiseases, phoneNumber);
    
    cart.push(patient );
    localStorage.setItem("myform", JSON.stringify(cart));
    
    
    const cartItems = JSON.parse(localStorage.getItem("myform"));
    let mycard =document.getElementById("card");
mycard.textContent = ""; 

cartItems.forEach(function(patient) {
    let z = document.createElement("div");
    z.classList.add("cardd");
    let patientDetails = `
    <img src="/dddddddddddddddddddddddddddddddddddddddd.png" alt="">
        <h2>${patient.fullName}</h2>
        <p>Password: ${patient.password}</p>
        <p>Date of Birth: ${patient.dob}</p>
        <p>Gender: ${patient.gender}</p>
        <p>Chronic Diseases: ${patient.chronicDiseases}</p>
        <p>Phone Number: ${patient.phoneNumber}</p>
    `;
    z.innerHTML = patientDetails;
    mycard.appendChild(z);
  

});
});





























// let form = document.getElementById("medicalForm");

// form.addEventListener("submit",function(el){
// el.preventDefault();

// let fullname = form.elements["fullName"].value;
// let password = form.elements["password"].value;
// let dob = form.elements["dob"].value;
// let gender = form.elements["gender"].value;
// let phone = form.elements["phone"].value;
// let diseases = form.elements["diseases"].value;



// })

// const outputText = `
// fullname: ${fullname}<br>
// password: ${password}<br>
// dob: ${dob}<br>
// gender: ${gender}<br>
// phone: ${phone}<br>
// diseases: ${diseases}
// `;

// document.getElementById("submit").addEventListener("click", function () {
//     // Add a new item to the cart array
//     outputText
//    localStorage.setItem("cart", JSON.stringify(cart));
//     alert("Item added to cart!");
//   });