import { createBrowserRouter } from "react-router";
import { Dashboard } from "../common/pages/dasboard";
import { RickAndMorty } from "../app/rick-and-morty/rick-and-morty";
import { Pokemons } from "../app/pokemons/pokemons";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      {
        path: "rick-and-morty",
        Component: RickAndMorty,
      },
      {
        path: "pokemons",
        Component: Pokemons,
      },
    ],
  },
]);
