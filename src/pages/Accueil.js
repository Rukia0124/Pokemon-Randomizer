import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Accueil = () => {
  const [pokemonFind, setPokemonFind] = useState(false);
  const [chosenPokemon, setChosenPokemon] = useState();
  const [random, setRandom] = useState(1);

  const searchPokemon = () => {
    setRandom(Math.floor(Math.random() * 905));
    axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`).then((res) => {
      setChosenPokemon(res.data);
      setPokemonFind(true);
    });
  };
  console.log(random);
  return (
    <div>
      <h1>Pokemon Randomizer</h1>
      <div>
        {pokemonFind ? (
          <div className="card">
            <Card pokemon={chosenPokemon} />
            <div className="btn" onClick={() => searchPokemon()}>
              <i class="fa-solid fa-shuffle"></i>
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="img">
              <img
                className="qm"
                src="./assets/img/qm.png"
                alt="point d'interrogation"
              />
            </div>
            <div className="btn" onClick={() => searchPokemon()}>
              Lancer le random
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accueil;
