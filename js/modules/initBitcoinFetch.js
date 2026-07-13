export default function initBitcoinFetch() {}
async function BitcoinFetch() {
  try{
  const bitcoinRespose = await fetch("https://blockchain.info/ticker");
  const bitcoinJson = await bitcoinRespose.json();
  const numeroBtc= document.querySelector('.btc-preco');
  numeroBtc.innerText=(1000/bitcoinJson.BRL.sell).toFixed(4);
  }catch (erro){
    console.log("Erro "+ erro);
  }
}
BitcoinFetch();
