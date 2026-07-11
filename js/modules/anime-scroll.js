export default function animacaoInitScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowAltura = window.innerHeight * 0.6;
    function animarScroll() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top - windowAltura;
        if (sectionTop < 0) {
          item.classList.add("ativo");
        } else if (item.classList.contains("ativo")) {
          item.classList.remove("ativo");
        }
      });
    }
    window.addEventListener("scroll", animarScroll);
  }
}
