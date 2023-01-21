import { useSelector } from "react-redux";

import Main from "../components/Main/Main";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import Navbar from "../components/Navbar/Navbar";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"

import { translationConfig } from "../configs/langConfig";

function NotFound() {
  const lang = useSelector((state) => state.lang);

  return (
    <Main>
      <Navbar>
        <GoBackBtn />
      </Navbar>
      <ErrorMessage
        title={`${translationConfig[lang].errorMessageTitle}: 404`}
        subtitle={translationConfig[lang].pageNotFound}
      />
    </Main>);
}

export default NotFound;
