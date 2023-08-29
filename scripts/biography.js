let sideBarExpanded = false;
    document.querySelector('.projects').addEventListener('click', () => {
      if (!sideBarExpanded) {
        document.querySelector('.projects').innerHTML = 
        `
        <div class="side-bar all-projects">
          <a>Projects</a>
        </div>
        <div class="side-bar automation-projects">
          <a class="automation-link">Automation Projects</a>
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