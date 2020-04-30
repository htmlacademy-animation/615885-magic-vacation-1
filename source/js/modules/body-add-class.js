export default ()=> {
  let body = document.getElementsByTagName('body')[0];

  window.onload = function() {
    body.classList.add('body-load');
  }
}
