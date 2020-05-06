export default ()=> {
  let lastItemRules = document.querySelector(`.rules__list li:last-child p`);
  let linkRules = document.querySelector(`.rules__link`);
  let linkRulesText = document.querySelector(`.rules__link span`);

  lastItemRules.addEventListener(`animationend`, function () {
    linkRules.classList.add(`rules__link--bg-before`);
    linkRulesText.classList.add(`rules__link__text--show`);
    linkRules.style.opacity = `1`;
    linkRules.style.transformOrigin = `100% 50%`;
    // linkRules.style.animation = 'show-btn 0.45s ease-in-out forwards';
  }, false);
};
