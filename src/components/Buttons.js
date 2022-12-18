import React from "react";
import { useGlobalContext } from "../context/context";

const Buttons = () => {
  const { handlePage, page, tpages, isLoading } = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("prev")}>
        prev
      </button>
      <p>
        {page + 1} of {tpages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("next")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
