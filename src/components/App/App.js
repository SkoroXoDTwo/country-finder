import "./App.scss";
import { setTheme } from "../../utils/setTheme";
import { useSelector } from "react-redux";
// компоненты
import Header from "../Header/Header";

// страницы
import Home from "../../pages/Home";


function App() {
  const theme = useSelector(state => state.theme);
  setTheme(theme);

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
