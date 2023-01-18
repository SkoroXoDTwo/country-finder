import "./App.scss";
import { Route, Routes } from "react-router-dom";

// компоненты
import Header from "../Header/Header";

// страницы
import Home from "../../pages/Home";
import Country from "../../pages/Country";
import NotFound from "../../pages/NotFound";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<Country />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
