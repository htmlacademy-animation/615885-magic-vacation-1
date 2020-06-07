export default ()=> {
  let linkGame = document.querySelector(`a[href="#game"]`);
  let screenGame = document.querySelector(`.screen--game`);
  let minutesSpan = document.querySelector(`.game__minutes`);
  let secondsSpan = document.querySelector(`.game__seconds`);
  let fpsInterval = 1000 / 11;
  let intervalTimer;
  let countDownDate;

  function timer() {
    let now = Date.now();
    let distance = countDownDate - now;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance > 0) {
      requestAnimationFrame(timer);
    } else {
      clearInterval(intervalTimer);
      return;
    }

    minutesSpan.innerHTML = minutes < 10 ? `0` + minutes : minutes;
    secondsSpan.innerHTML = seconds < 10 ? `0` + seconds : seconds;
  }

  function startTimer(min) {
    countDownDate = new Date().getTime() + 1000 * min;
    intervalTimer = setInterval(timer, fpsInterval);
  }

  if (screenGame.classList.contains(`active`)) {
    startTimer(300);
  }

  linkGame.addEventListener(`click`, function () {
    startTimer(300);
  });
};
