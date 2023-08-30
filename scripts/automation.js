const frontEndCards = [{
  id: 'id1',
  name: "Cureskin Internship",
  image: "images/cureskin_internship_picture.jfif",
  description: 'Found and documented bugs on Jira, created a dynamic framework to automate testing on pages assigned to me',
  tech: 'Python, Selenium, Jira, Git, TestLogger',
  link: 'https://github.com/cadence330/Cureskin_Project'
},
{
  id: 'id2',
  name: `Careerist Internship`,
  image: "images/careerist_internship.png",
  description: 'Learned the basics of Selenium and automated testing. Worked with Appium and Jenkins ',
  tech: 'Python, Selenium, Appium, BrowserStack',
  link: 'https://github.com/cadence330/python-selenium-automation'
},
/*{
  id: 'id3',
  name: 'Automated Birthday Wisher',
  image: 'images/birthday_project.jfif',
  description: "Based on csv data, automatically send email to user with birthday when the day comes",
  tech: '',
  link: "",
}*/]

let cardHTML = ''
    frontEndCards.forEach((card) => {
      cardHTML += `
        <div class="project-card" id=${card.id}>
          <img src=${card.image} class="project-card-image">
          <div class="project-card-description">
            <ul class="project-title">${card.name}</ul>
            <ul class="project-description">${card.description}</ul>
            <ul class="project-tech">${card.tech}</ul>
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
        sideBarExpanded = true;
      } else if (sideBarExpanded) {
        document.querySelector('.projects').innerHTML =
        `<a>Projects</a>`;
        sideBarExpanded = false;
        console.log(sideBarExpanded);
      }
    })