import './App.css';
import StorePage from './components/StorePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';

function App() {

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <StorePage/>
      <Footer/>
    </div>
  );
}

export default App;
