import PaginationControls from "./PaginationControls";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  children,
  currentPage,
  totalPages,
  setCurrentPage,
}: Props) => (
  <>
    <PaginationControls
      title="pagination-top"
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      totalPages={totalPages}
      scrollTopOnClick={false}
    />
    {children}
    <PaginationControls
      title="pagination-top"
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      totalPages={totalPages}
      scrollTopOnClick={true}
    />
  </>
);

export default Pagination;
