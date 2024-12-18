import { useState } from "react"

const Menu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div style={styles.container}>
      <button onClick={toggleMenu} style={styles.button}>
        {isMenuVisible ? 'Masquer' : 'Afficher'}
      </button>
      {isMenuVisible && (
        <ul style={styles.menu}>
          <li>Nourrir le chien</li>
          <li>Faire ses devoir</li>
          <li>Essayer des truc en React</li>
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
};

export default Menu;
