export default function initLinkSuave() {
  const links = document.querySelectorAll('[data-tab="menu"] a[href^="#"]');
  //funcoes
  if (links.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      console.log(section.offsetTop);

      // const topo = section.offsetTop;
      // forma Alternativa
      // window.scrollTo({
      //   top: topo,
      //   behavior: "smooth",
      // });

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
