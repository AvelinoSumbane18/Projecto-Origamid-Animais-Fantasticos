export default function initAccordion() {
  const accordion = document.querySelectorAll('[data-anime="accordion"] dt');
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