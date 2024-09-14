

const dynamicForm = document.getElementById("form") as HTMLFormElement;
const displayResume = document.getElementById("display-resume") as HTMLDivElement;
const shareableLinkbox = document.getElementById("shareable-link-box") as HTMLDivElement;
const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement;
const pdfButton = document.getElementById("download-pdf") as HTMLButtonElement;

dynamicForm.addEventListener("submit",(event:Event)=>{
    //  prevent for reload page
    event.preventDefault();

    // assemble input value

    const userName = (document.getElementById("username") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement) .value
    const email = (document.getElementById("email") as HTMLInputElement) .value
    const phone = (document.getElementById("phone") as HTMLInputElement) .value
    const education = (document.getElementById("education" ) as HTMLInputElement) .value
    const experience = (document.getElementById("experience" ) as HTMLInputElement) .value
    const skills = (document.getElementById("skills") as HTMLInputElement) .value

    // Save form data in localStorage with the username as the key

   const resumeData = {
    name,
    email,
    phone,
    education,
    experience,
    skills
    };
    localStorage.setItem(userName, JSON.stringify(resumeData)); // Saving the data locally


 // initiate the form content 

    const formHtml = `
            <h1> Editable Resume</h1>
            <h3>PERSONAL INFORMATION</h3>
            <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
            <p><strong>Email:</strong><span contenteditable="true">${email}</span></p>
            <p><strong>Contact No:</strong><span contenteditable="true">${phone}</span></p>

            <h3>EDUCATION</h3>
            <p contenteditable="true">${education}</p>

            <h3>EXPERIENCE</h3>
            <p contenteditable="true">${experience}</p>

            <h3>SKILLS</h3>
            <p contenteditable="true">${skills}</p>
        `;

        // display the generated resume form
        
            displayResume.innerHTML = formHtml;

            // Generate a shareable URL with the username only
       const shareableURL = `${window.location.origin}?username=${encodeURIComponent(userName)}`;

       // Display the shareable linkdownload and generate a shareable url with the username  didnt work 
    shareableLinkbox.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});


// Handle PDF download
   pdfButton.addEventListener('click', () => {
   window.print(); // This will open the print dialog and allow the user to save as PDF

    });


    // Prefill the form based on the username in the URL
     window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
    
    // Autofill form if data is found in localStorage

    const savedResumeData = localStorage.getItem(username);

    if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value = username;
    (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
    (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
    }
    }
    });







        

              