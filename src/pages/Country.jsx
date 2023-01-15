import Main from "../components/Main/Main"
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import Navbar from "../components/Navbar/Navbar";
import Details from "../components/Details/Details";

function Country() {
  return (
    <Main>
      <Navbar>
        <GoBackBtn />
      </Navbar>
      <Details />
    </Main>
  )
}

export default Country;
