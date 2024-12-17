import FullName from './FullName';
import Hobbies from './Hobbies';

const User = () => {
  return (
    <div style={styles.userCard}>
      <FullName />
      <Hobbies />
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

export default User;
