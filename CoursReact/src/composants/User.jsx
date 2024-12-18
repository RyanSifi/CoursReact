import PropTypes from 'prop-types';
import FullName from './FullName';
import Hobbies from './Hobbies';

const User = ({ prenom, nom, age, hobbies }) => {
  return (
    <div style={styles.userCard}>
      <FullName prenom={prenom} nom={nom} />
      <p>Âge : {age}</p>
      <Hobbies hobbies={hobbies} />
    </div>
  );
};

const styles = {
  userCard: {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '8px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

User.propTypes = {
  prenom: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default User;
