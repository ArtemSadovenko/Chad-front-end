import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const nav = useNavigate();
  nav("/login");

  useEffect(() => {
    nav("/login");
  }, []);
  return <div></div>;
}

export default Home;
