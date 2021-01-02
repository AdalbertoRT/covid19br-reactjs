import { DataStorage } from "./DataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Coronavirus from "./pages/Coronavirus";
import News from "./pages/News";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <DataStorage>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coronavirus" element={<Coronavirus />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </BrowserRouter>
      </DataStorage>
    </div>
  );
}

export default App;
