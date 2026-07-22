export default class LinkSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
  section.scrollIntoView(this.options);
  }

  addLinkSuaveEvent() {
    //eventos
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }
  init() {
    if (this.linksInternos.length) {
      this.addLinkSuaveEvent();
    }
    return this;
  }
}
