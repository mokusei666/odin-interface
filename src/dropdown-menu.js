export default function handleDropdownMenu() {
  const dropdownButton = document.querySelectorAll('.dropdown-button');
  dropdownButton.forEach((button) => {
    button.addEventListener('click', () => {
      const menuContainer = button.closest('.nav-list__item');
      const dropdownMenu = menuContainer.querySelector('.dropdown-menu');
      if (!dropdownMenu.classList.contains('visible')) {
        dropdownMenu.classList.add('visible');
      } else {
        dropdownMenu.classList.remove('visible');
      }
    });
  });
}
