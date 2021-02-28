import { useHistory } from "react-router-dom";

import { useSearch } from "../context/Search";

import "./SearchBar.css";

const SearchBar = () => {
  const history = useHistory();

  const { input, setInput } = useSearch();

  const onSearch = (e) => {
    e.preventDefault();
    history.push(`/search?result1=${input}`);
  };

  return (
    <div className="search-container">
      <form onSubmit={onSearch}>
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a spot!"
          className="search-input"
        />
      </form>
    </div>
  );
};

export default SearchBar;
