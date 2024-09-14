
const dynamicForm = document.getElementById("form") as HTMLFormElement;
const displayResume = document.getElementById("display-resume") as HTMLDivElement;


dynamicForm.addEventListener("submit",(event:Event)=>{
    //  prevent for reload page
    event.preventDefault();

    // assemble input value

    const name = (document.getElementById("name") as HTMLInputElement) .value
    const email = (document.getElementById("email") as HTMLInputElement) .value
    const phone = (document.getElementById("phone") as HTMLInputElement) .value
    const education = (document.getElementById("education" ) as HTMLInputElement) .value
    const experience = (document.getElementById("experience" ) as HTMLInputElement) .value
    const skills = (document.getElementById("skills") as HTMLInputElement) .value
    
    // initiate the form content 

    const formHtml = `
            <h1>Resume</h1>
            <h3>PERSONAL INFORMATION</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact No:</strong> ${phone}</p>

            <h3>EDUCATION</h3>
            <p>${education}</p>

            <h3>EXPERIENCE</h3>
            <p>${experience}</p>
            <h3>SKILLS</h3>
            <p>${skills}</p>
        `;

        // display the generated resume form
        if(displayResume){
            displayResume.innerHTML = formHtml

        }else{
            console.log("Resume element are missing for display")
        }


})