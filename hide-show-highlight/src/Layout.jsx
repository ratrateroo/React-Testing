import { useContext } from "react";
import Header from "./Header";
import PageContext from "./PageContext";

const Layout = ({ children }) => {
  const { pageId } = useContext(PageContext);

  return (
    <>
      <Header />
      <div id={pageId} children={children} />
    </>
  );
};

export default Layout;
