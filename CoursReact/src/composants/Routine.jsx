const Routine = () => {
  const handleManger = () => {
    alert('Manger');
  };

  const handleDormir = () => {
    alert('Dormir');
  };

  const handleEtudier = () => {
    alert('Etude');
  };

  return (
    <div style={styles.container}>
      <h1>Routine quotidienne</h1>
      <button onClick={handleManger} style={styles.button}>Manger</button>
      <button onClick={handleDormir} style={styles.button}>Dormir</button>
      <button onClick={handleEtudier} style={styles.button}>Étudier</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },  
};

export default Routine;
