const mediaQuerymax1200 = window.matchMedia('(max-width: 1199.98px)');
const mediaQuerymin1200 = window.matchMedia('(min-width: 1200px)');

document.addEventListener('DOMContentLoaded', function () {
  const dbuiLinks = document.querySelectorAll('.dbui-list-group-item');
  const dbuiCheckAll = document.querySelector('#select-all-checks');
  const dbuiCheckboxes = document.querySelectorAll('.dbui-row-check-input');

  function toggleCheckboxes(dbuiCheckAll) {
    dbuiCheckboxes.forEach((checkbox) => {
      checkbox.checked = dbuiCheckAll;
      let row = checkbox.parentNode.parentNode.parentNode;
      if (checkbox.checked) {
        row.classList.add('selected');
      } else {
        row.classList.remove('selected');
      }
    });
  }

  dbuiCheckAll.addEventListener('change', function () {
    toggleCheckboxes(this.checked);
  });

  dbuiCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function () {
      let row = checkbox.parentNode.parentNode.parentNode;
      if (checkbox.checked) {
        row.classList.add('selected');
      } else {
        row.classList.remove('selected');
      }
    });
  });

  dbuiLinks.forEach((element) => {
    element.addEventListener('click', function () {
      dbuiLinks.forEach((el) => {
        el.classList.remove('active');
      });
      element.classList.add('active');
    });
  });
});
