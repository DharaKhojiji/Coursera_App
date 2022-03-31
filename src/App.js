import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { DISHES } from "./Components/Shared/Dishes";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" exact element={}></Route> */}
        <Route path="/" exact element={<Navbar />}></Route>
        <Route path="/header" exact element={<Header />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route
          path="/menu"
          exact
          element={<Menu datadish={DISHES}></Menu>}
        ></Route>
        <Route path="/footer" exact element={<Footer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
