export default (selector, startNumber, endNumber, delay)=> {
  let totalPrize = document.querySelector(selector);
  let fpsInterval = 1000/12;

  let startNumberPrizes = startNumber;
  let endNumberPrizes = endNumber;

  function sumPrizes() {
    if(startNumberPrizes == endNumberPrizes) {
      return;
    }

    startNumberPrizes++;
    totalPrize.innerHTML = startNumberPrizes;
    requestAnimationFrame(startSumPrizes);
  }

  function startSumPrizes() {
    let interalSumPrize = setInterval(sumPrizes, fpsInterval);
  }

  setTimeout(startSumPrizes, delay);
}
