export default function initModal() {
  const botaoLogin = document.querySelector('[data-modal="abrir"');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("abrir");
  }
  function fecharModal(event){
    event.preventDefault()
    containerModal.classList.remove('abrir');
  }

  botaoLogin.addEventListener("click", abrirModal);
  botaoFechar.addEventListener("click", fecharModal);
}
