const latestDropDownMenu = document.querySelector('.latest-dropdown-menu');
const navLinks = latestDropDownMenu.querySelectorAll('.dropdown-item[data-mdb-toggle="tab"]');
const dropdownButton = latestDropDownMenu.querySelector('.dropdown-toggle[data-mdb-toggle="dropdown"');


document.addEventListener('DOMContentLoaded', () => {
    navLinks.forEach(link => link.addEventListener('click', function (event) {
        dropdownButton.textContent = this.textContent;
        dropdownButton.click();
    }))
})
