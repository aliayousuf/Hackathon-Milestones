var dynamicForm = document.getElementById("form");
var displayResume = document.getElementById("display-resume");
dynamicForm.addEventListener("submit", function (event) {
    //  prevent for reload page
    event.preventDefault();
    // assemble input value
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // initiate the form content 
    var formHtml = "\n            <h1>Resume</h1>\n            <h3>PERSONAL INFORMATION</h3>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Contact No:</strong> ").concat(phone, "</p>\n\n            <h3>EDUCATION</h3>\n            <p>").concat(education, "</p>\n\n            <h3>EXPERIENCE</h3>\n            <p>").concat(experience, "</p>\n            <h3>SKILLS</h3>\n            <p>").concat(skills, "</p>\n        ");
    // display the generated resume form
    if (displayResume) {
        displayResume.innerHTML = formHtml;
    }
    else {
        console.log("Resume element are missing for display");
    }
});
