import { createContext, useState } from "react";
import { BaseUrl } from "../baseUrl";
export const ContextProvider = createContext();

export default function AppContext({ children }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState("");
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogApi(page = 1) {
    setIsLoading(true);

    try {
      const response = await fetch(`${BaseUrl}?page=${page}`);
      const result = await response.json();
      setPosts(result.posts);
      setPage(result.page);
      setTotalPages(result.totalPages);
      console.log(result);
    } catch (err) {
      console.log(`Error Occur in fetch API ${err}`);
      setPosts([]);
      setPage("");
    }

    setIsLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogApi(page);
  }

  const value = {
    posts,
    setPosts,
    isLoading,
    setIsLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogApi,
    handlePageChange,
  };
  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
}
