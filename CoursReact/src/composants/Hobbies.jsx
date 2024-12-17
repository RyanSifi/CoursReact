const Hobbies = () => {
  const hobbies = ['Lecture', 'Programmation', 'Voyage'];

  return (
    <div>
      <h3>Passions :</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
