import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Lists from "../Lists/Lists";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <>
        <Hero/>
        <SearchForm/>
        <Lists/>
        </>
    );
};

export default Home;