import { createBrowserRouter } from "react-router";

import { TodoApp } from "../app/todo-app/todo-app";
import { Pokemons } from "../app/pokemons/pokemons";
import { Dashboard } from "../common/pages/dasboard";
import { Character } from "../app/rick-and-morty/character"
import { PokemonCharacter } from "../app/pokemons/pokemonCharacter";
import { RickAndMorty } from "../app/rick-and-morty/rick-and-morty";
import { ZustandExample } from "../app/zustand-example/zustand-example";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      {
        path: "todo-app",
        Component: TodoApp,
      },
      {
        path: "zustand-example",
        Component: ZustandExample,
      },
      {
        path: "rick-and-morty",
        Component: RickAndMorty,
      },
      {
        path: "rick-and-morty/character/:id",
        Component: Character,
      },
      {
        path: "pokemons",
        Component: Pokemons,
      },
      {
        path: "pokemons/character/:id",
        Component: PokemonCharacter,
      }
    ],
  },
]);
