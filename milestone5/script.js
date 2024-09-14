var dynamicForm = document.getElementById("form");
var displayResume = document.getElementById("display-resume");
var shareableLinkbox = document.getElementById("shareable-link-box");
var shareableLinkElement = document.getElementById("shareable-link");
var pdfButton = document.getElementById("download-pdf");
dynamicForm.addEventListener("submit", function (event) {
    //  prevent for reload page
    event.preventDefault();
    // assemble input value
    var userName = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(userName, JSON.stringify(resumeData)); // Saving the data locally
    // initiate the form content 
    var formHtml = "\n            <h1> Editable Resume</h1>\n            <h3>PERSONAL INFORMATION</h3>\n            <p><strong>Name:</strong><span contenteditable=\"true\">".concat(name, "</span></p>\n            <p><strong>Email:</strong><span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Contact No:</strong><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n            <h3>EDUCATION</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n\n            <h3>EXPERIENCE</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n\n            <h3>SKILLS</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
    // display the generated resume form
    displayResume.innerHTML = formHtml;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(userName));
    // Display the shareable link
    shareableLinkbox.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
pdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
