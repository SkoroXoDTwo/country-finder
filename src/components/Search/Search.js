import "./Search.scss"

function Search() {
  return (
    <div className="search">
      <span className="search__icon" />
      <input
        className="search__input"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default Search;
