import "./CountriesList.scss"
import { useSelector } from "react-redux";

import { selectVisibleCountries } from "../../store/countries/countriesSelectors";
import { selectCountriesInfo } from "../../store/countries/countriesSelectors";
import CountryCard from "../CountryCard/CountryCard";
import LoaderSection from "../LoaderSection/LoaderSection";

function CountriesList() {
  const { status } = useSelector(selectCountriesInfo)
  const search = useSelector(state => state.search)
  const region = useSelector(state => state.filter)
  const countries = useSelector(state => selectVisibleCountries(state, { search, region }));

  return (
    <>
      {status === "loading" && <LoaderSection />}
      {status === "received" && <ul className="countries-list">
        {countries.map((country) => (
          <CountryCard
            key={country.name}
            name={country.name}
            flagUrl={country.flags.svg}
            country={country}
          />
        ))}
      </ul>}
    </>

  )
}

export default CountriesList;
