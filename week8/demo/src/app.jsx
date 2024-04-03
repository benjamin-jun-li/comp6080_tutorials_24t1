import { useState, useEffect } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeTab, setActiveTab] = useState(0);
  const onResize = () => setWindowWidth(window.innerWidth);
  
  useEffect(() => {
    // mounted rendered
    window.addEventListener("resize", onResize);
    return () => {
        // unmounted cleanup removed from DOM tree
        window.removeEventListener("resize", onResize);
    }
  }, [activeTab]);

  return (
    <main
      style={{
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ fontSize: "10rem" }}>{windowWidth}</div>
    </main>
  );
};

export default App;
