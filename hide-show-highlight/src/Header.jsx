import { useContext } from "react";
import PageContext from "./PageContext";

const Header = () => {
  const { pageId, setPageId } = useContext(PageContext);

  const scrollTo = (e) => {
    e.preventDefault();
    setPageId(e.target.dataset.pageid);
  };

  return (
    <>
      <div>
        <div>
          <div>
            <a
              href="#profile"
              data-pageid="profile"
              onClick={scrollTo}
              className={`${pageId === "profile" ? "active" : ""}`}
            >
              Profile
            </a>
          </div>
          <div>
            <a
              href="#anotherview"
              data-pageid="anotherview"
              onClick={scrollTo}
              className={`${pageId === "anotherview" ? "active" : ""}`}
            >
              Another View
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
