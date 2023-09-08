import nextArrow from "../assets/image/next-arrow.svg";
import previousArrow from "../assets/image/previous-arrow.svg";

export default function Pagination({ handlePagination, pageNum, totalPage }) {
  return (
    <div className="pagination-section">
      <span className="arrow" data-page="previous" onClick={handlePagination}>
        <img src={previousArrow} alt="arrow" />
      </span>
      <span className="page-num">
        <i>{pageNum}</i> of <i>{totalPage}</i>
      </span>
      {pageNum != totalPage && (
        <span className="arrow" data-page="next" onClick={handlePagination}>
          <img src={nextArrow} alt="arrow" />
        </span>
      )}
    </div>
  );
}
