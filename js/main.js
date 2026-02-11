fetch('data/games.json')
  .then(response => response.json())
  .then(games => {
    const list = document.getElementById('game-list');

    games.forEach(game => {
      const div = document.createElement('div');
      div.className = 'game';
      div.innerHTML = `
        <a href="${game.link}" target="_blank">
          <img src="${game.image}">
          <p>${game.title}</p>
        </a>
      `;
      list.appendChild(div);
    });
  });

document.getElementById('search').addEventListener('input', function () {
  const text = this.value.toLowerCase();
  document.querySelectorAll('.game').forEach(game => {
    game.style.display = game.textContent.toLowerCase().includes(text)
      ? ''
      : 'none';
  });
});
