

document.addEventListener("DOMContentLoaded", () => {


    let toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement ;

    let skillsPart = document.getElementById('skills') as HTMLElement;

    toggleButton.addEventListener('click', () => {

        if (skillsPart.style.display === 'none') {
            
            skillsPart.style.display = 'block';
        } 
        else {
            skillsPart.style.display = 'none';
        }
    });
 });


