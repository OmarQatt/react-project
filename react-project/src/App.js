import logo from './logo.svg';
import './App.css';
import Header from "../src/Header.js"
import Footer from "../src/Footer.js"
import Main from "../src/Main.js"
function App() {
  return (
    <div>
      <header className="App-header">
          <Header/>
          <Main/>
          <Footer/>
      </header>
    </div>
  );
}

export default App;
