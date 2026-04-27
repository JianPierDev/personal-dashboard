export const getPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")

    if(!response.ok) {
        throw new Error("An error ocurred while requesting the information")
    }

    return response.json()
}