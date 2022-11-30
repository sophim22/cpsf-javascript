let menuButton = document.getElementById('humberger');
let closeButton = document.getElementById('xmark');
let toggleNav = document.getElementById('toggle-nav');
let isMenu = false;
let subMenu = document.querySelectorAll('#sub-menu');
class Navbar {
  constructor(menuButton, closeButton, toggleNav, isMenu) {
    this.menuButton = menuButton;
    this.closeButton = closeButton;
    this.isMenu = isMenu;
    this.toggleNav = toggleNav;
    this.menuButton.addEventListener('click', this.closeMenu);
    this.closeButton.addEventListener('click', this.closeMenu)
  }

  changeClassName = (element, add, remove) => {
    element.classList.remove(remove);
    element.classList.add(add)
  }

  closeMenu = () => {
    if (this.isMenu) {
      this.changeClassName(this.menuButton, "block", "hidden");
      this.changeClassName(this.closeButton, 'hidden', 'block');
      this.changeClassName(this.toggleNav, 'toggle-inactive', 'toggle-active');
    } else {
      this.changeClassName(this.menuButton, "hidden", "block");
      this.changeClassName(this.closeButton, 'block', 'hidden');
      this.changeClassName(this.toggleNav, 'toggle-active', 'toggle-inactive');

    }
    this.isMenu = !this.isMenu;
  }
}

class Subnav extends Navbar {
  constructor(menuButton, closeButton, toggleNav, isMenu) {
    super(menuButton, closeButton, toggleNav, isMenu);
  }
}

let nav = new Navbar(menuButton, closeButton, toggleNav, isMenu);
let subnav = new Subnav(menuButton, closeButton, toggleNav, isMenu);
for (let i = 0; i < subMenu.length; i++) {
  let nextParentelement = subMenu[i].parentNode.nextElementSibling;
  let preParentElement = subMenu[i].parentNode.previousElementSibling;
  let currentElement = subMenu[i].parentNode;
  subMenu[i].addEventListener('click', function () {
    if (currentElement.classList == 'active') {
      subnav.changeClassName(currentElement, 'inactive', 'active')
    } else {
      subnav.changeClassName(currentElement, 'active', 'inactive');
    }
    subnav.changeClassName(nextParentelement, 'inactive', 'active');
    subnav.changeClassName(preParentElement, 'inactive', 'active');
  })
}