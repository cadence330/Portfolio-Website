import { goToFrontEndPage } from "./sidebar.js";

const homeCards = [{
  id: 'id1',
  name: "Automation Testing",
  image: "images/automation_picture.jfif",
  description: ['Selenium', 'Cucumber', 'Java', 'Python', 'Jenkins', 'Maven', 'TestNG', 'Appium', 'SQL', 'Jira'],
  link: 'automation.html'
},
{
  id: 'id2',
  name: `Frontend`,
  image: 'images/frontend-picture-2.webp',
  description: ['HTML', 'CSS', 'Javascript', 'Python', 'Git', 'UI/UX', 'Tkinter', 'Pandas', 'API', 'Automation'],
  link: 'frontend.html'
},
{
  id: 'id3',
  name: "Future Projects",
  image: 'images/future-projects-image.jpg',
  description: ['SQL', 'React', 'Postman', 'Pytorch', 'DevOps', 'Typescript', 'AI', 'C', 'R', 'Linux'],
  link: ''
}]

let projectsDisplaying = false;
export const showCards = (homeCards) => {
  let projectsHTML = '';
  if (!projectsDisplaying) 
  {
    homeCards.forEach((card) => {
      projectsHTML += 
    `
    <a href='${card.link}'>
      <div class="content-projects-card" id=${card.id}>
        <div class="content-projects-title">
          ${card.name}
        </div>
        <div class="content-projects-image-container">
          <img class="content-projects-image" src="${card.image}">
        </div>
        <div class="content-projects-description">
          <div>
            <p class="content-description-title">Technologies Used</p>
          </div>
          <div class="card-description-li">
            <li>${card.description[0]}</li>
            <li>${card.description[1]}</li>
            <li>${card.description[2]}</li>
            <li>${card.description[3]}</li>
            <li>${card.description[4]}</li>
          </div>
          <div class="card-description-li">
            <li>${card.description[5]}</li>
            <li>${card.description[6]}</li>
            <li>${card.description[7]}</li>
            <li>${card.description[8]}</li>
            <li>${card.description[9]}</li>
          </div>
        </div>
      </div>
    </a>
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
  const projectCards = document.querySelectorAll('.content-projects-card')
  });

export let sideBarExpanded = false;
export const expandProjects = (sideBarExpanded) => {
  document.querySelector('.projects').addEventListener('click', () => {
    if (!sideBarExpanded) {
      document.querySelector('.projects').innerHTML = 
      `
      <div class="side-bar all-projects">
        <a>Projects</a>
      </div>
      <div class="side-bar automation-projects">
        <a href='automation.html' class="automation-link">Automation Projects</a>
      </div>
      <div class="side-bar frontend-projects">
        <a href='frontend.html'>Frontend Projects</a>
      </div>
      `;
      console.log('hello');
      sideBarExpanded = true;
    } else if (sideBarExpanded) {
      document.querySelector('.projects').innerHTML =
      `<a>Projects</a>`;
      sideBarExpanded = false;
      console.log(sideBarExpanded);
    }
  })
}
expandProjects();




