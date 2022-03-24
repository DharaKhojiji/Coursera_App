import "./App.css";
import MainComponents from "./Components/MainComponents";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <MainComponents></MainComponents>
      </div>
    </div>
  );
}

export default App;
