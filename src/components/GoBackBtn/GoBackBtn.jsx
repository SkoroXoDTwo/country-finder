import "./GoBackBtn.scss"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { translationConfig } from "../../configs/langConfig";

function GoBackBtn() {
  const navigate = useNavigate();
  const lang = useSelector((state) => state.lang);

  return (
    <button className="go-back-btn" onClick={() => navigate(-1)}>
      <div className="go-back-btn__icon"></div>
      <p className="go-back-btn__text">{translationConfig[lang].backBtn}</p>
    </button>
  );
}

export default GoBackBtn;
