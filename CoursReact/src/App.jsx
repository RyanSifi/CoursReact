import './App.css'
import Footer from './composants/containers/Footer'
import User from './composants/User'
import Player from './composants/Player';


function App() {

  return (
    <>
      <h1>Test</h1>
      <div>
        <h1>Informations</h1>
        <User />
      </div>
      <div className="App">
      <Player />
      </div>
      <Footer />
    </>
  )
}
export default App
