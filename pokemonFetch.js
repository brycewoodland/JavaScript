const URL = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokemon = async () => {
    try {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const pokemonData = await response.json();
        displayPokemon(pokemonData.results);
    } catch (error) {
        console.error('Fetch Error:', error);
        const dataContainer = document.querySelector('.data-container');
        const p = document.createElement('p');
        p.textContent = `Failed to Fetch: ${error.message}`;
        dataContainer.append(p);
    }
};

const displayPokemon = async (pokemons) => {
    const dataContainer = document.querySelector('.data-container');
    dataContainer.textContent = '';
 
    for (const pokemon of pokemons) {
        try {
            const detailedResponse = await fetch(pokemon.url);
            if (!detailedResponse.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const detailedData = await detailedResponse.json();
            
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const img = document.createElement('img');

            h2.textContent = detailedData.name;
            img.src = detailedData.sprites.front_default;
            img.alt = detailedData.name;

            div.append(h2);
            div.append(img);
            dataContainer.append(div);
        } catch (error) {
            console.error('Failed to display Pokemon:', error);
        }
    }
};

fetchPokemon();