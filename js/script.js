function initTabMenu() {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContent = document.querySelectorAll(".js-tabContent .animais-texto");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabMenu();
function initAccordion() {
  const accordion = document.querySelectorAll(".js-acordition dt");
  if (accordion.length) {
    accordion[0].classList.toggle("ativo");
    accordion[0].nextElementSibling.classList.toggle("ativo");
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
    accordion.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
