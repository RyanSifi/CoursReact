import PropTypes from 'prop-types';
import FirstName from './FirstName';
import LastName from './LastName';

const FullName = ({ prenom, nom }) => {
  return (
    <h2>
      <FirstName prenom={prenom} /> <LastName nom={nom} />
    </h2>
  );
};

FullName.propTypes = {
  prenom: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
};

export default FullName;
