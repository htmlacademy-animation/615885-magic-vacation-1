export default ()=> {
  let linkPrizes = document.querySelector(`a[href="#prizes"]`);
  let screenPrizes = document.querySelector(`.screen--prizes`);
  let fpsInterval = 1000 / 12;

  function wrapperSumPrizes(selector, startNumber, endNumber, delay) {
    let totalPrize = document.querySelector(selector);
    let startNumberPrizes = startNumber;
    let endNumberPrizes = endNumber;

    function sumPrizes() {
      if (startNumberPrizes === endNumberPrizes) {
        return;
      }

      startNumberPrizes++;
      totalPrize.innerHTML = startNumberPrizes;
      requestAnimationFrame(startSumPrizes);
    }

    function startSumPrizes() {
      setInterval(sumPrizes, fpsInterval);
    }

    setTimeout(startSumPrizes, delay);
  }

  if (screenPrizes.classList.contains(`active`)) {
    wrapperSumPrizes(`.prizes__number-7`, 0, 7, 4300);
    wrapperSumPrizes(`.prizes__number-900`, 11, 900, 6800);
  }

  linkPrizes.addEventListener(`click`, function () {
    wrapperSumPrizes(`.prizes__number-7`, 0, 7, 4300);
    wrapperSumPrizes(`.prizes__number-900`, 11, 900, 6800);
  });

};
