import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import "./css/Main.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Main">
        <Main />
      </div>
    </div>
  );
}

export default App;
