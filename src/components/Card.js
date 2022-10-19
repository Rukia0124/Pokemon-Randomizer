const Card = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img
        src={
          pokemon.sprites.other["official-artwork"].front_default !== null
            ? pokemon.sprites.other["official-artwork"].front_default
            : pokemon.sprites.front_default
        }
        alt={"photo de " + pokemon.name}
      ></img>
    </div>
  );
};

export default Card;
