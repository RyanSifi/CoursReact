import { useState } from "react"
import Hobbies from "./Hobbies";

const Menu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [hobbies, setHobbies] = useState([
    "Nourrir le chien",
    "Faire ses devoirs",
    "Essayer des trucs en React",
  ]);
  const [newHobby, setNewHobby] = useState("");

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const addHobby = () => {
    if (newHobby.trim() === "") {
      alert("Le champ ne peut pas être vide !");
      return;
    }

    setHobbies([...hobbies, newHobby.trim()]); 
    setNewHobby(""); 
  };

  return (
    <div style={styles.container}>
      <button onClick={toggleMenu} style={styles.button}>
        {isMenuVisible ? 'Masquer' : 'Afficher'}
      </button>
      {isMenuVisible && (
        <div style={styles.menu}>
          <Hobbies hobbies={hobbies} />
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Ajout hobby"
              value={newHobby}
              onChange={(e) => setNewHobby(e.target.value)}
              style={styles.input}
            />
            <button onClick={addHobby} style={styles.addButton}>
              Ajouter
            </button>
          </div>
        </div>
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
