export const getPokemonsDetails = async (url) => {
    const response = await fetch(url)
    
    if(!response.ok) {
        throw new Error("An error occurred while requesting the information")
    }

    return response.json()
}