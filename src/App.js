import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";
import Details from "./pages/details/Details";
function App() {
 

  return (
      <div className="bg-Dpplue min-h-screen p-6 text-orange-500 text-lg">
        <Navbar />
        <div className="flex justify-center items-center"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
  );
}

export default App;