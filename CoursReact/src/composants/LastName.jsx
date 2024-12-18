import PropTypes from 'prop-types';

const LastName = ({ nom }) => {
  return <span>{nom}</span>;
};

LastName.propTypes = {
  nom: PropTypes.string.isRequired,
};

export default LastName;
