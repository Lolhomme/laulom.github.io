# Laulom Anthony

<link rel="stylesheet" href="assets/styles.css">

<div class="headerbar">
  <span class="site-title">Laulom Anthony</span>
  <button id="theme-toggle" aria-label="Switch Theme">🌙 Switch Theme</button>
</div>

<div class="sidebar">
  <nav>
    <ul>
      <li><a href="#techskills">Tech Skills & Tools I've worked with</a></li>
      <li><a href="#experience">Work Experiences</a></li>
    </ul>
  </nav>
</div>

<div class="main-content">
  <div class="info-row">
    <div class="info-col">
      <h3>Contact</h3>
      <ul>
        <li><strong>Name:</strong> Your Name</li>
        <li><strong>Email:</strong> your.email@example.com</li>
        <li><strong>Phone:</strong> (123) 456-7890</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile">Profile</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/yourusername">Profile</a></li>
      </ul>
    </div>
    <div class="info-col">
      <h3>Education</h3>
      <ul>
        <li>BSc Computer Science<br><small>University Name</small></li>
        <li>MSc Software Engineering<br><small>University Name</small></li>
      </ul>
    </div>
    <div class="info-col">
      <h3>Languages</h3>
      <ul>
        <li>English 🇬🇧</li>
        <li>French 🇫🇷</li>
        <li>Spanish 🇪🇸</li>
      </ul>
    </div>
    <div class="info-col">
      <h3>Hobby</h3>
      <ul>
        <li>Photography</li>
        <li>Travel</li>
        <li>Coding</li>
        <li>Music</li>
      </ul>
    </div>
  </div>

  ## Tech Skills & Tools I've worked with {#techskills}

  ## Work Experiences {#experience}
</div>

<script>
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Set initial icon based on saved theme
function setThemeIcon() {
  if (body.classList.contains('dark-mode')) {
    toggle.textContent = '🌞 Switch Theme';
  } else {
    toggle.textContent = '🌙 Switch Theme';
  }
}

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}
setThemeIcon();

toggle.onclick = () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  setThemeIcon();
};
</script>