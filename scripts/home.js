import { changeContentContainer } from "./sidebar.js";

const homeCards = [{
  name: "Automation Testing",
  image: "images/automation_picture.jfif",
  description: 'I test applications'
},
{
  name: `Frontend`,
  image: 'images/frontend-picture-2.webp',
  description: 'I build websites'
},
{
  name: "Future Projects",
  image: 'images/future-projects-image.jpg',
  description: 'Projects I plan to do'
}]

let projectsDisplaying = false;
const showCards = (homeCards) => {
  let projectsHTML = '';
  if (!projectsDisplaying) 
  {
    homeCards.forEach((card) => {
      projectsHTML += 
    `
    <div class="content-projects-card">
      <div class="content-projects-title">
        ${card.name}
      </div>
      <div class="content-projects-image-container">
        <img class="content-projects-image" src="${card.image}">
      </div>
      <div class="content-projects-description">
        ${card.description}
      </div>
    </div>
    `;
    })

    projectsDisplaying = true;
    return projectsHTML;
  } else if (projectsDisplaying) {
    projectsDisplaying = false;
    return '';
  }
 
}

document.querySelector('.projects-button').addEventListener('click', () => {
  document.querySelector('.content-projects-container').innerHTML = 
  showCards(homeCards);
  document.querySelector('.content-contact-container').classList.add('is-showing');
  });



let sideBarExpanded = false;
document.querySelector('.projects').addEventListener('click', () => {
  if (!sideBarExpanded) {
    console.log('hello');
    document.querySelector('.projects').innerHTML = 
    `
    <div class="side-bar all-projects">
      <a>Projects</a>
    </div>
    <div class="side-bar automation-projects">
      <a class="automation-link">Automation Projects</a>
    </div>
    <div class="side-bar frontend-projects">
      <a>Frontend Projects</a>
    </div>
    `;
    sideBarExpanded = true;
    document.querySelector('.automation-link').addEventListener('click', () => {
      changeContentContainer();
    })
  } else if (sideBarExpanded) {
    document.querySelector('.projects').innerHTML =
    `<a>Projects</a>`;
    sideBarExpanded = false;
  }
})




