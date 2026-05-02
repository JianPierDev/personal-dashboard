import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async ({name = ""}) => {
  const response = await axios.get(API_URL, {
    params: { name },
  });

  return response.data;
};
