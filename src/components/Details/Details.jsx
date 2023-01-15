import "./Details.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadDetails } from "../../store/details/detailsActions";

import LoaderSection from "../LoaderSection/LoaderSection";

function Details() {
  const dispatch = useDispatch();
  const { currentCountry, status } = useSelector((state) => state.details);
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
        </section>
      )}
    </>
  );
}

export default Details;
