import "./Details.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadDetails } from "../../store/details/detailsActions";
import { detailsConfig } from "../../mock/detailsConfig";
import LoaderSection from "../LoaderSection/LoaderSection";

function Details() {
  const dispatch = useDispatch();
  const { currentCountry, status } = useSelector((state) => {
    return state.details
  });

  const { name } = useParams();

  useEffect(() => {
    dispatch(loadDetails(name));
  }, [name, dispatch]);

  return (
    <>
      {status === "loading" && <LoaderSection />}
      {status === "received" && (
        <section className="details">
          <img className="details__img" src={currentCountry.flag} alt={name} />
          <div className="details__info">
            <h2 className="details__name">{name}</h2>
            <ul className="details__statistics">
              {detailsConfig.map((setup) => (
                <li key={setup}>
                  <p className="details__text">
                    <span className="details__text-bold">{setup}: </span>
                    {currentCountry[setup]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

export default Details;
