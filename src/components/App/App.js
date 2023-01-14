import "./App.scss";
import Header from "../Header/Header";
import { setTheme } from "../../utils/setTheme";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector(state => state.theme);
  setTheme(theme);

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <div className="test"></div>
      </div>
    </div>
  );
}

export default App;
