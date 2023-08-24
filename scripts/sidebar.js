
export function changeContentContainer () {
    document.querySelector('.content-container').innerHTML = 
    `
    <div class="project-cards-container">
      <div class="project-card">
        <img src="images/ping-ping-image.png" class="project-card-image">
        <div class="project-card-description">
          <ul class="project-title">Ping Pong</ul>
          <ul class="project-description">Created a playable game that keeps score</ul>
          <ul class="project-tech">Turtle Library, UI</ul>
          <ul>Code <a class="code-link">Here</a></ul>
        </div>
      </div>
      <div class="project-card">
        <img src="images/kanye-project.png" class="project-card-image">
        <div class="project-card-description">
          <ul class="project-title">Quote Generator</ul>
          <ul class="project-description">Use a free API to post a message on a designed canvas</ul>
          <ul class="project-tech">API, Tkinter</ul>
          <ul>Code <a class="code-link">Here</a></ul>
        </div>
      </div>
      <div class="project-card">
        <img src="images/birthday_project.jfif" class="project-card-image">
        <div class="project-card-description">
          <ul class="project-title">Automated Birthday Wisher</ul>
          <ul class="project-description">Based on csv data, automatically send email to user with birthday when the day comes</ul>
          <ul class="project-tech">Pandas Library, API, SMTP</ul>
          <ul>Code <a class="code-link">Here</a></ul>
        </div>
      </div>
    </div>
    `;
};
