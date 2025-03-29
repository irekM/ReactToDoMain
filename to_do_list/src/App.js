import React from "react";
import { Routes, Route } from 'react-router-dom';
import Container from "./Container/Container";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import List from "./components/List/List";
import NotFound from "./components/NotFoundComponent/NotFound";



const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element ={<Favorite/>} />
          <Route path="/favorite" element={<About />} />
          <Route path="/list/:listId" element={<List/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;


