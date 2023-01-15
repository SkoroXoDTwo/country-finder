import "./CountryCard.scss"
import { putCommasInNumber } from "../../utils/putCommasInNumber";

function CountryCard({ name, population, region, capital, flagUrl }) {

  return (
    <li>
      <article className="country">
        <img className="country__img" src={flagUrl} alt={name} loading="lazy"/>
        <div className="country__container">
          <h2 className="country__title">{name}</h2>
          <ul className="country__statistics">
            <li>
              <p className="country__text">
                <span className="country__text-bold">population: </span>
                {putCommasInNumber(population)}
              </p>
            </li>
            <li>
              <p className="country__text">
                <span className="country__text-bold">Region: </span>
                {region}
              </p>
            </li>
            <li>
              <p className="country__text">
                <span className="country__text-bold">Capital: </span>
                {capital}
              </p>
            </li>
          </ul>
        </div>
      </article>
    </li>
  )
}

export default CountryCard;
