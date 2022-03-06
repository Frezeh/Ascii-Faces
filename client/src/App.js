import { createContext, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import Intro from "./components/Intro";
import { InfiniteScroll } from "./components/InfiniteScroll";

export const AppContext = createContext(null);

export default function App() {
  const [productList, setProductList] = useState([]);
  // tracking on which page we currently are
  const [page, setPage] = useState(1);
  // change and confirm the sort value
  const [sort, setSort] = useState("");
  // check if we have more pages to load
  const [hasMorePages, setHasMorePages] = useState(true);

  return (
    <AppContext.Provider
      value={{
        productList,
        setProductList,
        page,
        setPage,
        sort,
        setSort,
        hasMorePages,
        setHasMorePages,
      }}
    >
      <CssBaseline />
      <Intro />
      <InfiniteScroll />
    </AppContext.Provider>
  );
}
