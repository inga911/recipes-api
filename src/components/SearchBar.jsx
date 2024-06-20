import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const ref = useRef();
  const nav = useNavigate();

  return (
    <div className="search">
      <input ref={ref} type="text" placeholder="e.g. Pizza" />
      <button
        className="search-btn"
        onClick={() => nav(`/search/${ref.current.value}`)}
      >
        <span class="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};

export default SearchBar;
