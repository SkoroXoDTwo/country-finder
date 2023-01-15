import "./CountriesList.scss"
import { useSelector } from "react-redux";

import { selectVisibleCountries } from "../../store/countries/countriesSelectors";

import CountryCard from "../CountryCard/CountryCard";


function CountriesList() {
  const search = useSelector(state => state.search)
  const region = useSelector(state => state.filter)
  const countries = useSelector(state => selectVisibleCountries(state, { search, region }));

  return (
    <ul className="countries-list">
      {countries.map((country) => (
        <CountryCard
          key={country.name}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flagUrl={country.flags.svg}
        />
      ))}
    </ul>
  )
}

export default CountriesList;
