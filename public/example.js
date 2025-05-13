// /js/main.js – Handles theme toggle, panic key, proxy launcher

// Toggle light/dark theme
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// On page load, apply saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
};

// Panic key (Esc to fake a page)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.body.innerHTML = '<h1 style="color: #ff0000; text-align: center; margin-top: 20%;">ERROR 404: PAGE NOT FOUND</h1>'; // Fake error page
  }
});

// Launch proxy site when button is clicked
function goProxy() {
  const siteInput = document.getElementById('siteInput');
  const url = siteInput.value.trim();
  if (url) {
    window.location.href = `https://www.${url}`; // Change this if your proxy needs a different format
  } else {
    alert('Please enter a valid site URL!');
  }
}

// Quick launch proxy for preset sites
function quickLaunch(site) {
  window.location.href = `https://www.${site}`;
}

// Game search filter (for the game launcher)
function filterGames() {
  const gameSearch = document.getElementById('gameSearch');
  const query = gameSearch.value.toLowerCase();
  const gameList = document.getElementById('gameList');
  const games = gameList.querySelectorAll('button');

  games.forEach((game) => {
    const gameName = game.innerText.toLowerCase();
    game.style.display = gameName.includes(query) ? '' : 'none';
  });
}
