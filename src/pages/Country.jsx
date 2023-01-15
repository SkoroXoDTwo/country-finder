import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Main from "../components/Main/Main"
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import Navbar from "../components/Navbar/Navbar";
import Details from "../components/Details/Details";
import { useDispatch } from "react-redux";
import { loadDetails } from "../store/details/detailsActions";

function Country() {
  const dispatch = useDispatch();
  let { name } = useParams();

  useEffect(() => {
    dispatch(loadDetails(name))
  }, [])

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
