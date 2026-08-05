document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value.trim();

    let gender = document.querySelector('input[name="gender"]:checked');

    if(name==""){
        alert("Please enter your name");
        return;
    }

    if(email==""){
        alert("Please enter your email");
        return;
    }

    if(phone.length!=10 || isNaN(phone)){
        alert("Enter a valid 10-digit phone number");
        return;
    }

    if(dob==""){
        alert("Select your Date of Birth");
        return;
    }

    if(!gender){
        alert("Select your gender");
        return;
    }

    if(course==""){
        alert("Select a course");
        return;
    }

    if(address==""){
        alert("Enter your address");
        return;
    }

    alert("Student Registered Successfully!");

    document.getElementById("registrationForm").reset();

});