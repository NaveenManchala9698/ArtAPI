import "../css/Pagination.css";

const Pagination = ({ artPerPage, totalArt, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArt / artPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-buttons">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
