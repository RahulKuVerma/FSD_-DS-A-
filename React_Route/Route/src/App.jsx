import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";   
import About from "./Component/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
