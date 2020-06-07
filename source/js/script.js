// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import bodyAddClass from './modules/body-add-class.js';
import letterAnimation from './modules/letterAnimation.js';
import startSvgAnimation from './modules/start-svg-animation.js';
import svgStrokeAnimation from './modules/svg-stroke-animation.js';
import gameTimer from './modules/game-timer.js';
import prizesNumberAnimation from './modules/prizes-number-animation.js';

// init modules
bodyAddClass();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

letterAnimation();
startSvgAnimation();
svgStrokeAnimation();
gameTimer();
prizesNumberAnimation('.prizes__number-7', 0, 7, 4300);
prizesNumberAnimation('.prizes__number-900', 11, 900, 6800);
