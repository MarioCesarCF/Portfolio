import './App.css';

import FooterComponent from './Components/Footer';
import HeaderComponent from './Components/Header';
import MainComponent from './Components/Main';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />      
    </div>
  );
}

export default App;
