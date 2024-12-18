import './App.css'
import Footer from './composants/containers/Footer'
import User from './composants/User'
import Player from './composants/Player'
import Routine from './composants/Routine'
import Menu from './composants/Menu';



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
      <div className="App">
      <Player />
      <h1>Routine</h1>
      <Routine />
      <h1>Menu</h1>
      <Menu/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
