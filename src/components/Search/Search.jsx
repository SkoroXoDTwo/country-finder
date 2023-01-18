import "./Search.scss";

import { useSelector, useDispatch } from "react-redux";

import { changeSearch, clearSearch } from "../../store/search/searchActions";


function Search() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search);

  const changeInput = (e) => {
    dispatch(changeSearch(e.target.value));
  };

  const clearSearchValue = () => {
    dispatch(clearSearch())
  }

  return (
    <div className="search">
      <div className="search__icon" />
      <input
        value={searchValue}
        className="search__input"
        placeholder="Search for a country..."
        onChange={changeInput}
      />
      {searchValue && <button className="search__clear-btn" onClick={clearSearchValue} />}
    </div>
  );
}

export default Search;
