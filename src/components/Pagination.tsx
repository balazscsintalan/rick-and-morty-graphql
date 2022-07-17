import * as React from 'react';

interface IPaginationProps {
  currentPage: number;
  numberOfPages: number;
  previous: () => void;
  next: () => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  numberOfPages,
  next,
  previous,
}) => {
  return (
    <div className="flex justify-center p-4">
      <div className="btn-group">
        {currentPage !== 1 && numberOfPages > 1 && (
          <button className="btn" onClick={previous}>
            «
          </button>
        )}
        <button className="btn">
          Page {currentPage} / {numberOfPages}
        </button>
        {currentPage < numberOfPages && (
          <button className="btn" onClick={next}>
            »
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
