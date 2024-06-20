import React, { useEffect, useState } from "react";
import useStore from "../store/mainStore";
import { useNavigate } from "react-router-dom";

const Pagination = () => {
  const { recipesObject } = useStore();
  const [pages, setPages] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    if (recipesObject) {
      const totalPages = Math.ceil(recipesObject.total / recipesObject.limit);
      setPages(totalPages);
    }
  }, [recipesObject]);

  function goTo(page) {
    if (page === 1) {
      return nav("/");
    } else {
      nav("/page/" + page);
    }
  }

  return (
    <div className="pagination">
      {Array.from(Array(pages).keys()).map((x, i) => (
        <div className="pagination-button" onClick={() => goTo(x + 1)} key={i}>
          {x + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
