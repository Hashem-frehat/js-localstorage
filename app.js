let cart = [];

function Patient(username, password, email, dob, gender, chronicDiseases, phoneNumber) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.dob = dob;
    this.gender = gender;
    this.chronicDiseases = chronicDiseases;
    this.phoneNumber = phoneNumber;
}

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const chronicDiseases = Array.from(document.getElementById('diseases').selectedOptions).map(option => option.value);
    const phoneNumber = document.getElementById('phone').value;

   
    document.getElementById('usernameError').textContent = "";
    document.getElementById('passwordError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('dobError').textContent = "";
    document.getElementById('phoneError').textContent = "";

    let valid = true;

    if (username.includes(' ')) {
        document.getElementById('usernameError').textContent = "Username should not contain spaces.";
        valid = false;
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).{9,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = "Password must be at least 9 characters long, contain at least one number, one uppercase letter, and one special character.";
        valid = false;
    }

    const phoneRegex = /^07\d{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById('phoneError').textContent = "Phone number must be 10 digits long and start with 07.";
        valid = false;
    }


    const existingUser = cart.find(patient => patient.username === username);
    if (existingUser) {
        alert("User already exists.");
        valid = false;
    }

    if (valid) {
        let patient = new Patient(username, password, email, dob, gender, chronicDiseases, phoneNumber);
        cart.push(patient);
        localStorage.setItem("myform", JSON.stringify(cart));

        const cartItems = JSON.parse(localStorage.getItem("myform"));
        let mycard = document.getElementById("card");
        mycard.textContent = "";

        cartItems.forEach(function(patient) {
            let z = document.createElement("div");
            z.classList.add("cardd");
            let patientDetails = `
            <img src="/dddddddddddddddddddddddddddddddddddddddd.png" alt=""> 
                <h2>${patient.username}</h2>
                <p>Email: ${patient.email}</p>
                <p>Password: ${patient.password}</p>
                <p>Date of Birth: ${patient.dob}</p>
                <p>Gender: ${patient.gender}</p>
                <p>Chronic Diseases: ${patient.chronicDiseases.join(', ')}</p>
                <p>Phone Number: ${patient.phoneNumber}</p>
            `;
            z.innerHTML = patientDetails;
            mycard.appendChild(z);
        });
    }
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