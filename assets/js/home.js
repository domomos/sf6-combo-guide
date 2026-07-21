(() => {
  const list = document.getElementById("characterList");
  const characters = Array.isArray(window.CHARACTERS) ? window.CHARACTERS : [];

  characters.forEach((character) => {
    const link = document.createElement("a");
    const name = document.createElement("strong");
    const description = document.createElement("span");
    link.className = "character-card";
    link.href = character.href;
    name.textContent = character.name;
    description.textContent = `${character.romanName} / ${character.description}`;
    link.append(name, description);
    list.appendChild(link);
  });
})();
