export default ()=> {
  let lastItemRules = document.querySelector('.rules__list li:last-child p');
  let linkRulesBefore = document.querySelector('.rules__link');

  lastItemRules.addEventListener('animationend', function(evt) {
    linkRulesBefore.style.transformOrigin = '100% 50%';
    linkRulesBefore.style.animation = 'show-btn 0.65s ease-out forwards';
  }, false)
}
