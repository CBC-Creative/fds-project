const countriesTabs = document.getElementById('countries-tabs');
const countriesNavLinks = countriesTabs.querySelectorAll('.dropdown-item[data-mdb-toggle="tab"]');
const dropdownButton = countriesTabs.querySelector('.dropdown-toggle[data-mdb-toggle="dropdown"');


document.addEventListener('DOMContentLoaded', () => {
    countriesNavLinks.forEach(link => link.addEventListener('click', function (event) {
        dropdownButton.textContent = this.textContent;
        dropdownButton.click();
    }))
})
