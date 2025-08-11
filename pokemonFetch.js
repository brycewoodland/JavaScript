const modal = document.getElementById('ability-modal');
const modalName = document.getElementById('modal-ability-name');
const modalEffect = document.getElementById('modal-ability-effect');
const modalShortEffect = document.getElementById('modal-ability-short-effect');
const modalCloseBtn = document.getElementById('ability-modal-close');

modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) { // close when clicking outside modal content
        modal.style.display = 'none';
    }
});


const URL = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokemonList = async () => {
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error(`Error fetching list: ${res.status}`);
        }
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error('fetchPokemonList error:', error);
        throw error;
    }
};

const fetchPokemonDetails = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching details: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('fetchPokemonDetails error:', error);
        throw error;
    }
};

const fetchAbilityDetails = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching ability: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('fetchAbilityDetails error:', error);
        throw error;
    }
}

const extractAbilities = (details) => {
    return details.abilities.map(item => ({
        name: item.ability.name,
        url: item.ability.url,
    }));
};

const createPokemonCard = (details) => {
    const card = document.createElement('div');

    // Name
    const name = document.createElement('p');
    name.textContent = details.name.charAt(0).toUpperCase() + details.name.slice(1);

    // Image
    const img = document.createElement('img');
    img.src = details.sprites.front_default;
    img.alt = details.name;

    // Abilities container
    const abilitiesContainer = document.createElement('div');
    abilitiesContainer.textContent = 'Abilities: ';

    // Create a button for each ability
    const abilities = extractAbilities(details);
    abilities.forEach(ability => {
        const btn = document.createElement('button');
        btn.textContent = ability.name;
        btn.addEventListener('click', async () => {
      try {
        const abilityDetails = await fetchAbilityDetails(ability.url);

        const effectEntry = abilityDetails.effect_entries.find(entry => entry.language.name === 'en');

        if (effectEntry) {
            modalName.textContent = ability.name.charAt(0).toUpperCase() + ability.name.slice(1);
            modalEffect.textContent = effectEntry.effect;
            modalShortEffect.textContent = effectEntry.short_effect;

            modal.style.display = 'flex';
        } else {
            alert('No effect information available.');
        }
    } catch (error) {
        alert('Failed to load ability details.');
    }
});


        abilitiesContainer.appendChild(btn);
    });

    card.append(img, name, abilitiesContainer);
    return card;
};

const displayPokemonList = async () => {
    const dataContainer = document.querySelector('.data-container');
    dataContainer.textContent = '';

    try {
        const pokemonList = await fetchPokemonList();

        for (const pokemon of pokemonList) {
            const details = await fetchPokemonDetails(pokemon.url);
            const card = createPokemonCard(details);
            dataContainer.append(card);
        }
    } catch (error) {
        console.error(error);
        dataContainer.textContent = `Error: ${error.message}`;
    }
};

displayPokemonList();