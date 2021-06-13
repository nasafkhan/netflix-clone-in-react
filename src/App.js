import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {fetchUrls} from "./Urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title={"NETFLIX ORIGINALS"} url={fetchUrls.originals} isLarge />
      <RowPost title={"Action"} url={fetchUrls.action} />
      <RowPost title={"Horror"} url={fetchUrls.horror} />
      <RowPost title={"Comedy"} url={fetchUrls.comedy} />
      <RowPost title={"Horror"} url={fetchUrls.horror} />
    </div>
  );
}

export default App;
