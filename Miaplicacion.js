const cardsContainer = document.getElementById("cardsContainer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const apiUrl = "https://rickandmortyapi.com/api/character";
let currentPage = 1;

// Función para cargar personajes de una página específica
async function loadCharacters(page) {
  try {
    const response = await fetch(`${apiUrl}?page=${page}`);
    const data = await response.json();
console.log(data.results)
    // Limpia el contenedor antes de agregar nuevos personajes
    cardsContainer.innerHTML = "";

    data.results.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('cards');

      const characterImage = document.createElement('img');
      characterImage.classList.add('img');
      characterImage.src = character.image;
      characterImage.alt = "Character Image";
      card.appendChild(characterImage);

      const characterName = document.createElement('h2');
      characterName.classList.add('titulo');
      characterName.textContent = character.name;
      card.appendChild(characterName);

      const characterSpecie = document.createElement('h2');
      characterSpecie.classList.add('titulo');
      characterSpecie.textContent = character.species;
      card.appendChild(characterSpecie);

      const characterLocation = document.createElement('h2');
      characterLocation.classList.add('titulo');
      characterLocation.textContent = character.location.name;
      card.appendChild(characterLocation);

      const characterOrigin = document.createElement('h2');
      characterOrigin.classList.add('titulo');
      characterOrigin.textContent = `Origen: ${character.origin.name}`;
      card.appendChild(characterOrigin);

      const characterStatus = document.createElement('p');
      characterStatus.textContent = `Status: ${character.status}`;
      card.appendChild(characterStatus);

      cardsContainer.appendChild(card);
    });

    // Actualizar el estado de los botones
    prevButton.disabled = !data.info.prev;
    nextButton.disabled = !data.info.next;
  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
}

// Cargar la página inicial
loadCharacters(currentPage);

// Evento para cargar la página anterior
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    loadCharacters(currentPage);
  }
});

// Evento para cargar la página siguiente
nextButton.addEventListener("click", () => {
  currentPage++;
  loadCharacters(currentPage);
});
const publicKey ="50f87db3f5b368df7fc6c7a9bfe6ade8"
const privateKey = "09e42453669f834a888332990da79258bd66b71b"
