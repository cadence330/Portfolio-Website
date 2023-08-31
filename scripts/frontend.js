const frontEndCards = [{
  id: 'id1',
  name: "Ping Pong",
  image: "images/ping-ping-image.png",
  description: 'Created a playable game that keeps score',
  link: 'https://github.com/cadence330/Ping_Pong'
},
{
  id: 'id2',
  name: `Quote Generator`,
  image: "images/kanye-project.png",
  description: 'Use a free API to post a message on a designed canvas',
  link: 'https://github.com/cadence330/Quote-Generator'
},
{
  id: 'id3',
  name: 'Automated Birthday Wisher',
  image: 'images/birthday_project.jfif',
  description: "Based on csv data, automatically send email to user with birthday when the day comes",
  link: "https://github.com/cadence330/Birthday-Wisher",
}]

let cardHTML = ''
    frontEndCards.forEach((card) => {
      cardHTML += `
        <div class="project-card" id=${card.id}>
          <img src=${card.image} class="project-card-image">
          <div class="project-card-description">
            <ul class="project-title">${card.name}</ul>
            <ul class="project-description">${card.description}</ul>
            <ul class="project-tech">Turtle Library, UI</ul>
            <ul>Code <a target='_blank' href=${card.link} class="code-link">Here</a></ul>
          </div>
        </div>
      `;
    })

    let projectsContainer = 
    `<div class="project-cards-container">` + cardHTML + `</div>`;
    document.querySelector('.content-container').innerHTML = projectsContainer;

    let sideBarExpanded = false;
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