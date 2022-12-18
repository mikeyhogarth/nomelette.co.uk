import { useState } from "react";

const perPage = 20;

function getTotalPages<T>(perPage: number, items: ArrayLike<T>): number {
  return Math.ceil(items.length / perPage);
}

export function usePagination() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  function getPage<T>(data: Array<T> | undefined): Array<T> {
    if (!data) return [];
    return data.slice(currentPage * perPage, currentPage * perPage + perPage);
  }

  return {
    perPage,
    currentPage,
    setCurrentPage,
    getTotalPages,
    getPage,
  };
}
