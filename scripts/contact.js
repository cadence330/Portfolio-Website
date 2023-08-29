import { showFrontEnd } from "./home.js";
import { goToFrontEndPage } from "./sidebar.js";

showFrontEnd();
document.querySelector('.frontend-page').addEventListener('click', () => {
  document.querySelector('.contact-field').innerHTML = goToFrontEndPage();
})

