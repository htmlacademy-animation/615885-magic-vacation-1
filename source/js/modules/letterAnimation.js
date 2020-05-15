export default () => {
  class LetterAnimation {
    constructor(elementSelector, timer, classForActivate, property) {
      this._elementSelector = elementSelector;
      this._timer = timer;
      this._classForActivate = classForActivate;
      this._property = property;
      this._element = document.querySelector(this._elementSelector);
      this._timeOffset = Math.round(Math.random() * (1200 - 300) + 300);

      this.prePareText();
    }

    createElement(letter) {
      const span = document.createElement(`span`);
      span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;
      this._timeOffset = Math.round(Math.random() * (800 - 100) + 300);
      span.textContent = letter;
      return span;
    }

    prePareText() {
      if (!this._element) {
        return;
      }
      const text = this._element.textContent.trim().split(` `).filter((letter)=> letter !== ``);

      const content = text.reduce((fragmentParent, word)=> {

        const wordElement = Array.from(word).reduce((fragment, letter)=> {
          fragment.appendChild(this.createElement(letter));
          return fragment;
        }, document.createDocumentFragment());

        const wordContainer = document.createElement(`span`);
        wordContainer.classList.add(`letters`);
        wordContainer.appendChild(wordElement);
        fragmentParent.appendChild(wordContainer);
        return fragmentParent;

      }, document.createDocumentFragment());

      this._element.innerHTML = ``;
      this._element.appendChild(content);
    }

    runAnimation() {
      if (!this._element) {
        return;
      }
      this._element.classList.add(this._classForActivate);
    }

    destroyAnimation() {
      if (!this._element) {
        return;
      }
      this._element.classList.remove(this._classForActivate);
    }

  }

  const animationIntroTitle = new LetterAnimation(`.intro__title`, 800, `active`, `transform`);
  const animationIntroDate = new LetterAnimation(`.intro__date`, 800, `active`, `transform`);
  const animationPrizesTitle = new LetterAnimation(`.prizes__title`, 600, `active`, `transform`);


  let screenIntro = document.querySelector(`.screen--intro`);
  let screenPrizes = document.querySelector(`.screen--prizes`);
  let navList = document.querySelector(`.page-header__nav`);


  if (!screenIntro.classList.contains(`screen--hidden`)) {
    setTimeout(()=> {
      animationIntroTitle.runAnimation();
      animationIntroDate.runAnimation();
    }, 500);
  }

  if (!screenPrizes.classList.contains(`screen--hidden`)) {
    setTimeout(()=> {
      animationPrizesTitle.runAnimation();
    }, 500);
  }

  navList.addEventListener(`click`, function (evt) {
    let target = evt.target;
    if (target.dataset.href === `prizes`) {
      setTimeout(()=> {
        animationPrizesTitle.runAnimation();
      }, 500);
    }
    if (target.dataset.href === `top`) {
      setTimeout(()=> {
        animationIntroTitle.runAnimation();
        animationIntroDate.runAnimation();
      }, 500);
    }
  });
};
