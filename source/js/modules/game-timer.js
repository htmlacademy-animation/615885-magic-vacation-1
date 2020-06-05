export default ()=> {
  let minutesSpan = document.querySelector('.game__minutes');
  let secondsSpan = document.querySelector('.game__seconds');

  function wrapperForTimer(SS) {

    let countDownDate = new Date().getTime() + 1000 * SS;

    function timer() {
      let now = Date.now();
      let distance = countDownDate - now;

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        requestAnimationFrame(timer);
      } else {
        return;
      }

      minutesSpan.innerHTML = minutes < 10 ? '0' + minutes: minutes;
      secondsSpan.innerHTML = seconds < 10 ? '0' + seconds: seconds;
    }

    requestAnimationFrame(timer)

  }

  wrapperForTimer(300)
}
