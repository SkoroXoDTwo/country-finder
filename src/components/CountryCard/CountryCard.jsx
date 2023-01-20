import "./CountryCard.scss"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { countryCardConfig } from "../../configs/countryCardConfig";
import { translationConfig } from "../../configs/langConfig";

function CountryCard({ name, flagUrl, country }) {
  const lang = useSelector((state) => state.lang);

  return (
    <Link to={`/country/${name}`}>
      <li>
        <article className="country">
          <img className="country__img" src={flagUrl} alt={name} loading="lazy" />
          <div className="country__container">
            <h2 className="country__title">{name}</h2>
            <ul className="country__statistics">
              {countryCardConfig.map((setup) => (
                <li key={setup}>
                  <p className="country__text">
                    <span className="country__text-bold">{translationConfig[lang][setup]}: </span>
                    {country[setup] ? country[setup] : 'none'}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </li>
    </Link>
  )
}

export default CountryCard;
