export const getPokemonCharacterById = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    if(!response.ok) {
        throw new Error("Hubo un error");
    }

    return response.json()
}