import React, { useState, Fragment, useEffect } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = ['Search for medicine', 'Search for Pain Balm', 'Search for Baby Soap'];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholderIndex, placeholders.length]);

  return (
    <Fragment>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder={placeholders[placeholderIndex]}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="sIcon">
        <SearchIcon/>
        </div>
      </form>
    </Fragment>
  );
};

export default Search;
