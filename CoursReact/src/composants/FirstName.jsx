import PropTypes from 'prop-types';

const FirstName = ({ prenom }) => {
  return <span>{prenom}</span>;
};
FirstName.propTypes = {
  prenom: PropTypes.string.isRequired
};

export default FirstName;
