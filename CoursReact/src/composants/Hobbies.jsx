import PropTypes from 'prop-types';

const Hobbies = ({ hobbies }) => {
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

Hobbies.propTypes = {
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Hobbies;
