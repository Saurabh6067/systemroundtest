import React from "react";
import  { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Card from "./components/Card";
import FavCardList from "./components/FavCardList";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Card/>}/>
          <Route path="/card" element={<FavCardList/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
