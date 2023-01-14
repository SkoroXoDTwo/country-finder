import "./CountriesList.scss"
import { useSelector } from "react-redux";

import { selectAllCountries } from "../../store/countries/countriesSelectors";

import CountryCard from "../CountryCard/CountryCard";


function CountriesList() {
  const countries = useSelector(selectAllCountries);

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
