export const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")

    if(!response.ok) {
        throw new Error("An error ocurred while requesting the information")
    }

    return response.json()
}