document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsPart = document.getElementById('skills');
    toggleButton.addEventListener('click', function () {
        if (skillsPart.style.display === 'none') {
            skillsPart.style.display = 'block';
        }
        else {
            skillsPart.style.display = 'none';
        }
    });
});
