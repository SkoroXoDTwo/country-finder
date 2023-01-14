import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { setTheme } from "../../utils/setTheme";
import { useSelector } from "react-redux";
// компоненты
import Header from "../Header/Header";

// страницы
import Home from "../../pages/Home";

function App() {
  const theme = useSelector((state) => state.theme);
  setTheme(theme);

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
