import "./App.css";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { DISHES } from "./Components/Shared/Dishes";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* {DISHES.map((item) => ( */}
      <div className="container">
        <Menu datadish={DISHES}></Menu>
      </div>
      {/* ))} */}
      {/* <Menu /> */}
    </div>
  );
}

export default App;
