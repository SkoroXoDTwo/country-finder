import "./CountriesList.scss"
import { useSelector } from "react-redux";

import { selectVisibleCountries } from "../../store/countries/countriesSelectors";
import { selectCountriesInfo } from "../../store/countries/countriesSelectors";
import CountryCard from "../CountryCard/CountryCard";
import LoaderSection from "../LoaderSection/LoaderSection";
import ErrorMessage from "../ErrorMessage/ErrorMessage"

import { translationConfig } from "../../configs/langConfig";

function CountriesList() {
  const lang = useSelector((state) => state.lang);

  const { status, error } = useSelector(selectCountriesInfo)
  const search = useSelector(state => state.search)
  const region = useSelector(state => state.filter)
  const countries = useSelector(state => selectVisibleCountries(state, { search, region }));

  return (
    <>
      {status === "loading" && <LoaderSection />}
      {status === "received" && (countries.length !== 0 ?

        <ul className="countries-list">
          {countries.map((country) => (
            <CountryCard
              key={country.name}
              name={country.name}
              flagUrl={country.flags.svg}
              country={country}
            />

          ))}
        </ul>
        : <ErrorMessage
          title={translationConfig[lang].nothingFoundTitle}
          subtitle={translationConfig[lang].nothingFoundSubtitle}
        />)}

      {status === "rejected" && <ErrorMessage title={error} subtitle={"Refresh the page or visit later"} />}
    </>

  )
}

export default CountriesList;
