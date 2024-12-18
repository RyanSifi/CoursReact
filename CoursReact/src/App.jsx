import './App.css'
import Footer from './composants/containers/Footer'
import User from './composants/User'
import Player from './composants/Player';


function App() {
  return (
    <div>
      <h1>Informations</h1>
      <User 
        prenom="Ryan" 
        nom="SIFI" 
        age={22} 
        hobbies={['Lecture', 'Programmation', 'Voyage']} 
      />
    </div>
  );
}

export default App;
