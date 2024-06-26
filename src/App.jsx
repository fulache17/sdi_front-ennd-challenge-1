import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import downloadImage from './image/Capture.png';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = 57;
  const displayPages = 14;

  const goToPage = (page) => {
    setCurrentPage(page);
 
  };

  const renderPagination = () => {
    const pages = [];
    const ellipsis = <span className="ellipsis">...</span>;
    const totalPages = maxPages;

    let start = Math.max(1, currentPage - Math.floor(displayPages / 2));
    let end = Math.min(totalPages, start + displayPages - 1);

    if (end - start + 1 < displayPages) {
      start = Math.max(1, end - displayPages + 1);
    }

    if (currentPage > 1) {
      pages.push(
        <a
          key="prev"
          href="#"
          className="page-link"
          onClick={() => goToPage(currentPage - 1)}
        >
          &laquo; Prev
        </a>
      );
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <a
          key={i}
          href="#"
          className={i === currentPage ? 'page-link active' : 'page-link'}
          onClick={() => goToPage(i)}
        >
          {i}
        </a>
      );
    }

    if (start > 1) {
      pages.splice(1, 0, ellipsis);
    }

    if (end < totalPages) {
      pages.push(ellipsis);
      pages.push(
        <a
          key="last"
          href="#"
          className="page-link"
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </a>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <a
          key="next"
          href="#"
          className="page-link"
          onClick={() => goToPage(currentPage + 1)}
        >
          &raquo;
        </a>
      );
    }

    return pages;
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={downloadImage} alt="Download" />
        <div className="share-icon">
          <FaShareAlt /> share
        </div>
      </div>
      <p style={{ color: 'red', textAlign: 'left' }}>Darwin Tumaneng</p>
      <h4>
        Toyota Mobility Solutions PH empowers seafood wholesaler Mida food with
        digital logistic platform
      </h4>

      <p>
        Logistic Platforms addresses limitations in Mida Food's delivery
        operations
      </p>

      <button style={{ textDecoration: 'underline', fontSize:"12px" }}>READ ARTICLE</button>
      <br />
      <div className="pagination">{renderPagination()}</div>
    </div>
  );
}

export default App;
