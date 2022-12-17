import { clsx } from "clsx";
import { getPaginationControls } from "@/behaviors/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  scrollTopOnClick?: boolean;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  scrollTopOnClick,
  setCurrentPage,
}: Props) => {
  if (totalPages < 2) return null;

  const controls = getPaginationControls(
    currentPage,
    totalPages,

    setCurrentPage
  );

  return (
    <nav title="pagination" className="my-4">
      <ul>
        {controls.map(
          ({ label, title, isCurrent, disabled, clickHandler }, idx) => (
            <li key={idx} className="inline-block">
              <button
                className={clsx(
                  "mr-1 h-10 w-10 border text-center",
                  isCurrent && "bg-primary text-white",
                  disabled && "border-gray-200 text-gray-200",
                  !disabled && "border-primary hover:brightness-110"
                )}
                title={title}
                disabled={disabled}
                aria-current={isCurrent ? "page" : false}
                onClick={() => {
                  clickHandler();
                  scrollTopOnClick && window.scrollTo(0, 0);
                }}
              >
                {label}
              </button>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
