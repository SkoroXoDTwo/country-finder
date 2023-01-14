import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { setTheme } from "../../utils/setTheme";
import { useSelector } from "react-redux";
import { selectAllCountries } from "../../store/countries/countriesSelectors";
// компоненты
import Header from "../Header/Header";

// страницы
import Home from "../../pages/Home";
import { useEffect } from "react";

function App() {
  const theme = useSelector((state) => state.theme);
  const countries = useSelector((state) => state.countries)
  setTheme(theme);

  useEffect(() => {

  }, [])

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
