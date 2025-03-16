import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import List from "../List/List";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <>
        <Hero/>
        <SearchForm/>
        <List/>
        </>
    );
};

export default Home;