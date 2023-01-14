import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadCountries } from "../store/countries/countriesActions";
import { selectCountriesInfo } from "../store/countries/countriesSelectors";

import Main from "../components/Main/Main"
import Navbar from "../components/Navbar/Navbar";
import CountriesList from "../components/CountriesList/CountriesList";

function Home() {
  const dispatch = useDispatch();
  const { qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty)
      dispatch(loadCountries())
  }, [qty, dispatch])

  return (
    <Main>
      <Navbar />
      <CountriesList />
    </Main>
  );
}

export default Home;
