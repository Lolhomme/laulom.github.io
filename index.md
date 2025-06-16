# Laulom Anthony

<link rel="stylesheet" href="assets/styles.css">

<div class="sidebar">
  <nav>
    <ul>
      <li><a href="#contact-information">Contact</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#references">References</a></li>
    </ul>
  </nav>
</div>

<div class="main-content">
  <!-- Dark/Light mode switch -->
  <button id="theme-toggle">🌙 Switch Theme</button>

  ## <span id="contact-information"></span>Contact Information
  - **Name:** Your Name
  - **Email:** your.email@example.com
  - **Phone:** (123) 456-7890
  - **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/yourprofile)
  - **GitHub:** [Your GitHub Profile](https://github.com/yourusername)

  ## <span id="education"></span>Education
  ### Bachelor of Science in Computer Science
  - **University Name**, City, State
  - **Graduation Date:** Month Year

  ### Master of Science in Software Engineering
  - **University Name**, City, State
  - **Graduation Date:** Month Year

  ## <span id="experience"></span>Experience
  ### Job Title
  - **Company Name**, City, State
  - **Dates of Employment:** Month Year - Present
  - **Responsibilities:**
    - Describe your responsibilities and achievements.
    - Use bullet points for clarity.

  ### Previous Job Title
  - **Previous Company Name**, City, State
  - **Dates of Employment:** Month Year - Month Year
  - **Responsibilities:**
    - Describe your responsibilities and achievements.
    - Use bullet points for clarity.

  ## <span id="skills"></span>Skills
  - Programming Languages: Python, JavaScript, Java
  - Web Technologies: HTML, CSS, React, Node.js
  - Tools & Technologies: Git, Docker, AWS

  ## <span id="projects"></span>Projects
  ### Project Title
  - Brief description of the project, technologies used, and your role.

  ### Another Project Title
  - Brief description of the project, technologies used, and your role.

  ## <span id="references"></span>References
  Available upon request.
</div>

<script>
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

toggle.onclick = () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
};
</script>