import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import FreetoPlay from "./views/FreetoPlay/FreetoPlay";
import PageGameSingle from "./views/PageGameSingle/PageGameSingle";
import PageGenre from "./views/PageGenre/PageGenre";
import PagePlatform from "./views/PagePlatform/PagePlatform";
import Search from "./views/Search/Search";
import HomePage from "./views/HomePage/HomePage";
import NotFound from "./views/NotFound/NotFound";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";



function App() {
  return (
      <div className="App">
        <Router>
          <Header/>

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/game" element={<FreetoPlay/>}/>
            <Route path="/game/:number" element={<PageGameSingle/>}/>
            <Route path="/games/:category" element={<PageGenre/>}/>
            <Route path="/platform/:platform" element={<PagePlatform/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/game/login" element={<Login/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}


export default App;