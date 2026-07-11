import outsideClick from "./initoutside-click.js";

export default function initDropDownMenu() {}

const dropDownMenu = document.querySelectorAll('[data-dropdown="menu"]');
dropDownMenu.forEach((item) => {
  ["click", "touchstart"].forEach((userEvent) => {
    item.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("ativo");
  outsideClick(this, ["click", "touchstart"], () => {
    this.classList.remove("ativo");
  });
}

