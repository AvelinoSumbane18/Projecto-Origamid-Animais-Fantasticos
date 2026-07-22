export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    //Adiciona o bind as aos objectos da classe
    this.toggleModal=this.toggleModal.bind(this)
    this.cliqueForaModal=this.cliqueForaModal.bind(this)
  }

  abrirModal(event) {
    this.containerModal.classList.toggle("abrir");
  }
  toggleModal(event) {
    event.preventDefault();
    this.abrirModal();
  }

   cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.toggleModal);
    this.botaoFechar.addEventListener("click", this.toggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal)
  }
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
