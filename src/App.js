
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


import logo from './logo.svg';
import './App.css';
import ProductContextProvider from "./contexts/ProductContext";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <ProductList/>
      </ProductContextProvider>
    </div>
  );
}

export default App;

/*
 <!--
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      -->
 */