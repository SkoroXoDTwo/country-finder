import Main from "../components/Main/Main"
import Navbar from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../store/countries/countriesActions";
import { selectCountriesInfo } from "../store/countries/countriesSelectors";
import { useEffect } from "react";
function Home() {
  const dispatch = useDispatch();
  const { qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty)
      dispatch(loadCountries())
  }, [qty])

  return (
    <Main>
      <Navbar />
    </Main>
  );
}

export default Home;
