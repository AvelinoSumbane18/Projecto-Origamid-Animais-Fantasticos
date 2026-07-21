export default function initLinkSuave() {
  const links = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  //funcoes
  if (links.length) {

    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    //eventos
    links.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
