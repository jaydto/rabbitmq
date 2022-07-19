import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.

const Items=({ currentItems })=> {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

const PaginatedItems=({ itemsPerPage })=> {
  // fetch data
  const [data, setData] = useState([]);

  useEffect(() => {
    gettingData();
  }, []);
  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setData(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const gettingData = async () => {
    const res = await fetch("http://localhost:5000/");
    if (res.ok) {
      let resp = await res.json();
      console.log(resp);

      setData(resp);
      console.log(resp);
    }
  };




  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    ); 
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={data} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default PaginatedItems;
