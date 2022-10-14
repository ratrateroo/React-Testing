import { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";
import AnotherView from "./AnotherView";
import Layout from "./Layout";
import PageContext from "./PageContext";
import ProfileView from "./ProfileView";

const Home = () => {
  const [pageId, setPageId] = useState("homepage");
  const anotherCompRef = useRef();
  const profileCompRef = useRef();

  useEffect(() => {
    if (pageId !== "homepage")
      scroller.scrollTo(pageId, {
        duration: 500,
        delay: 100,
        smooth: true,
      });
  }, [pageId]);

  const renderer = () => {
    switch (pageId) {
      case "profile":
        return <ProfileView profileCompRef={profileCompRef} />;
      default:
        return <AnotherView anotherCompRef={anotherCompRef} />;
    }
  };

  return (
    <>
      <PageContext.Provider value={{ pageId, setPageId }}>
        <Layout>{renderer()}</Layout>
      </PageContext.Provider>
    </>
  );
};

export default Home;
