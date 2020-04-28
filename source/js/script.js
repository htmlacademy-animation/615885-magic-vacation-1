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
import messageIntro from './modules/animate-message.js';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
messageIntro();

new FullPageScroll();
