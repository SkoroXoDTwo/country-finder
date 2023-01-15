import "./GoBackBtn.scss"
import { Link } from "react-router-dom";

function GoBackBtn() {
  return (
      <Link to={`/`}>
        <button className="go-back-btn">
          <div className="go-back-btn__icon"></div>
          <p className="go-back-btn__text">back</p>
        </button>
      </Link>
  );
}

export default GoBackBtn;
