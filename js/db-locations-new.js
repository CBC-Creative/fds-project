const countriesTabs = document.getElementById('countries-tabs');
const locationsMenu = document.getElementById('locations-menu');
const countriesNavLinks = countriesTabs.querySelectorAll('.dropdown-item[data-mdb-toggle="tab-link"]');
const dropdownButton = countriesTabs.querySelector('.dropdown-toggle[data-mdb-toggle="dropdown"]');
const countriesButtonsLinks = countriesTabs.querySelectorAll('.nav-link');

const isInViewport = (elem) => {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top <= 0
    );
};
document.addEventListener('scroll', function (event) {
    if (isInViewport(countriesTabs)) {
        locationsMenu.classList.add('fixed');
    } else {
        locationsMenu.classList.remove('fixed');
    }
}, false);
document.addEventListener('DOMContentLoaded', () => {
    countriesNavLinks.forEach(link => link.addEventListener('click', function (event) {
        dropdownButton.textContent = this.textContent;
        dropdownButton.click();
    }));
    countriesButtonsLinks.forEach.call(countriesButtonsLinks, function (buttonLink, i, els) {
        buttonLink.addEventListener('click', function () {
            [].forEach.call(els, function (buttonLink) {
                if (buttonLink !== this) {
                    buttonLink.classList.remove("active");
                } else {
                    buttonLink.classList.add("active");
                }
            }, this);
        });
    });
})
