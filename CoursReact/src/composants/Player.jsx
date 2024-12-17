const Player = () => {
  const score = 40;

  const result = score > 50 ? 'Vainqueur' : 'Perdant';

  return (
    <div>
      <h1>Résultat du joueur</h1>
      <p>{result} avec un score de {score}</p>
    </div>
  );
};

export default Player;
