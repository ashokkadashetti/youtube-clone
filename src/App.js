import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Recomanded from "./components/recomdedVideos/Recomanded";
import Sidebar from "./components/sidebar/Sidebar";
import SearchPageComp from "./components/searchPage/SearchPageComp";
import ButtonComp from "./components/buttonComp/ButtonComp";
import makeStyles from "./AppStyle";
import ShortVideo from "./components/shorts/ShortVideo";

function App() {
  const classes = makeStyles();

  const [inputValue, setInputValue] = useState("");

  const getInputFromHeader = (e) => {
    setInputValue(e);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header getInputFromHeader={getInputFromHeader}/>
        <Routes>
          <Route path="/Home" element={<Navigate replace to="/" />}></Route>
          <Route
            path="/shorts"
            element={
              <div className={classes.appPage}>
                <Sidebar />
                <ShortVideo />
              </div>
            }
          ></Route>
          <Route
            path="/search/:searchTerm"
            element={
              <div className={classes.appPage}>
                <Sidebar />
                <SearchPageComp inputValue={inputValue} />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className={classes.appPage}>
                <Sidebar />
                <div className="app">
                  <ButtonComp />
                </div>
                <Recomanded />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
