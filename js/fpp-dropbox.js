const mediaQuerymax1200 = window.matchMedia('(max-width: 1199.98px)');
const mediaQuerymin1200 = window.matchMedia('(min-width: 1200px)');

document.addEventListener('DOMContentLoaded', function () {
  const dbuiLinks = document.querySelectorAll('.dbui-list-group-item');

  dbuiLinks.forEach((element) => {
    element.addEventListener('click', function () {
      dbuiLinks.forEach((el) => {
        el.classList.remove('active');
      });
      element.classList.add('active');
    });
  });

  if (mediaQuerymax1200.matches) {
    let dbuiDropdown = document.querySelectorAll('.dbui-dropdown');
    let dbuiDropdownInner = document.querySelectorAll('.dbui-dropdown-inner');
    const dbuiListGroup = document.querySelectorAll('.dbui-list-group');

    dbuiDropdown.forEach((element) => {
      element.addEventListener('click', function () {
        dbuiListGroup.forEach((el) => {
          el.classList.toggle('show');
        });
      });
    });

    dbuiLinks.forEach((element) => {
      element.addEventListener('click', function () {
        let ddInnerHTML = element.innerHTML;
        dbuiDropdownInner.forEach((el) => {
          el.innerHTML = ddInnerHTML;
        });
        dbuiListGroup.forEach((el) => {
          el.classList.remove('show');
        });
      });
    });
  }

  if (mediaQuerymin1200.matches) {
  }
});
