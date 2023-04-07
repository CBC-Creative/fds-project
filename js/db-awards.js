const awardsDropDownMenu = document.querySelector('.awards-dropdown-menu');
const navLinks = awardsDropDownMenu.querySelectorAll('.dropdown-item[data-mdb-toggle="tab"]');
const dropdownButton = awardsDropDownMenu.querySelector('.dropdown-toggle[data-mdb-toggle="dropdown"');


document.addEventListener('DOMContentLoaded', () => {
    navLinks.forEach(link => link.addEventListener('click', function (event) {
        dropdownButton.textContent = this.textContent;
        dropdownButton.click();
    }))
})
