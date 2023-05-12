import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import BeersPage from "./pages/BeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";
import HomePage from "./pages/HomePage";
import BeerDetail from "./pages/BeerDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/beers/:beerId" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
