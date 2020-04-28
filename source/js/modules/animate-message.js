export default ()=> {
  let messageIntro = document.querySelector('.intro__message p');
  let menuItem = document.querySelectorAll('.js-menu ul li')[0].children[0];

  if(menuItem.classList.contains('active')) {
    messageIntro.classList.add('message--opacity');
  }
}
