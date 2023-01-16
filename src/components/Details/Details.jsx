import "./Details.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { loadDetails, loadNeigbors } from "../../store/details/detailsActions";
import { detailsConfig } from "../../mock/detailsConfig";
import { putSpaceInString } from "../../utils/putSpaceInString";
import LoaderSection from "../LoaderSection/LoaderSection";

function Details() {
  const dispatch = useDispatch();
  const { currentCountry, status, neigbors } = useSelector((state) => {
    return state.details
  });

  const { name } = useParams();

  useEffect(() => {
    dispatch(loadDetails(name));
  }, [name, dispatch]);

  useEffect(() => {
    if (status === "received" && currentCountry.borders) {
      dispatch(loadNeigbors(currentCountry.borders))
    }
  }, [status, dispatch]);


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
                    <span className="details__text-bold">{putSpaceInString(setup)}: </span>
                    {currentCountry[setup] ? currentCountry[setup] : 'none'}
                  </p>
                </li>
              ))}
            </ul>
            {neigbors &&
              <div className="details__border-countries">
                <h3 className="details__border-title">Border Countries:</h3>
                <ul className="details__border-list">
                  {
                    neigbors.map((name) => (
                      <li key={name}>
                        <Link to={`/country/${name}`}>
                          <button className="details__border-btn">
                            {name}
                          </button>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            }
          </div>
        </section>
      )}
    </>
  );
}

export default Details;
