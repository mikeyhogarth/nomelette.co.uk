interface PaginationControl {
  title: string;
  label: string;
  isCurrent?: boolean;
  disabled?: boolean;
  clickHandler: () => void;
}

export function getTotalPages<T>(perPage: number, items: ArrayLike<T>): number {
  return Math.ceil(items.length / perPage);
}

export function getPaginationControls(
  currentPage: number,
  totalPages: number,
  setCurrentPage: (newPage: number) => void
): PaginationControl[] {
  return [
    {
      title: "Previous Page",
      label: "←",
      clickHandler: () => setCurrentPage(currentPage - 1),
      disabled: currentPage == 0,
    },
    ...new Array(totalPages).fill(undefined).map((_, idx) => ({
      title: `Go to page ${idx + 1}`,
      label: `${idx + 1}`,
      isCurrent: currentPage == idx,
      clickHandler: () => setCurrentPage(idx),
    })),
    {
      title: "Next Page",
      label: "→",
      clickHandler: () => setCurrentPage(currentPage + 1),
      disabled: currentPage == totalPages - 1,
    },
  ];
}
