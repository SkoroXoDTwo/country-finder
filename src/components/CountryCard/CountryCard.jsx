import "./CountryCard.scss"
import { Link } from "react-router-dom";
import { putCommasInNumber } from "../../utils/putCommasInNumber";
import { countryCardConfig } from "../../mock/countryCardConfig";

function CountryCard({ name, flagUrl, country }) {

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
                    <span className="country__text-bold">{setup}: </span>
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
