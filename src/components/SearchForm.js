import React, { useEffect, useMemo } from "react";
import { useGlobalContext } from "../context/context";
import debounce from "lodash.debounce";

const SearchForm = () => {
  const { handleSearch } = useGlobalContext();

  const debounceResult = useMemo(() => {
    return debounce(handleSearch, 1000);
  }, []);

  useEffect(() => {
    return () => {
      debounceResult.cancel();
    };
  });

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search News</h2>
      <input
        type="text"
        className="form-input"
        onChange={(e) => debounceResult(e?.target?.value)}
      />
    </form>
  );
};

export default SearchForm;
