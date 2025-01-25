
function getLocalTimeInTimezone(timezone) {
    const date = new Date();
    return date.toLocaleString("pt-BR", { timeZone: timezone });
  }
  function update(){
      const tokyoTimeElement = document.getElementById("hora");
      tokyoTimeElement.textContent =  getLocalTimeInTimezone("Asia/Tokyo");

  }
  update();
  setInterval(update, 1000);


function nada(){
    let nome = document.getElementById('inome').value
    alert(`Desculpe ${nome}, ainda não aprendi essa parte :)`)
}