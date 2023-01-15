import "./Details.scss"
import { useSelector } from "react-redux";

function Details() {
  const details = useSelector(state => state.details.currentCountry[0]);

  return (
    <section className="details">
      <img className="details__img" src={details.flag} />
    </section>
  );
}

export default Details;
