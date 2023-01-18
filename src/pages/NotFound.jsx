import Main from "../components/Main/Main";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import Navbar from "../components/Navbar/Navbar";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"

function NotFound() {
  return (
    <Main>
      <Navbar>
        <GoBackBtn />
      </Navbar>
      <ErrorMessage title={"Error: 404"} subtitle={"Page Not Found"} />
    </Main>);
}

export default NotFound;
