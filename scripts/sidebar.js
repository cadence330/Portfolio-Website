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
  link: ''
},
{
  id: 'id3',
  name: 'Automated Birthday Wisher',
  image: 'images/birthday_project.jfif',
  description: "Based on csv data, automatically send email to user with birthday when the day comes",
  link: "",
}]

export function goToFrontEndPage () {
    let cardHTML = ''
    frontEndCards.forEach((card) => {
      cardHTML += `
        <div class="project-cards-container">
          <div class="project-card" id=${card.id}>
            <img src=${card.image} class="project-card-image">
            <div class="project-card-description">
              <ul class="project-title">${card.name}</ul>
              <ul class="project-description">${card.description}</ul>
              <ul class="project-tech">Turtle Library, UI</ul>
              <ul>Code <a href=${card.link} class="code-link">Here</a></ul>
            </div>
          </div>
        </div>
      `;
    })

    let projectsContainer = 
    `<div class="project-cards-container">` + cardHTML + `</div>`
    document.querySelector('.content-container').innerHTML = projectsContainer;
    return projectsContainer;
};
