import "./GoBackBtn.scss"
import { Link, useNavigate } from "react-router-dom";

function GoBackBtn() {
  const navigate = useNavigate();

  return (
    <button className="go-back-btn" onClick={() => navigate(-1)}>
      <div className="go-back-btn__icon"></div>
      <p className="go-back-btn__text">back</p>
    </button>
  );
}

export default GoBackBtn;
