
import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import styles from './Favorite.module.scss';

const Favorite = () => {
    const favoriteCards = useSelector(getFavoriteCards);
    const navigate = useNavigate();

    if (favoriteCards.length === 0) {
        return (
            <div>
                <PageTitle>Favorite</PageTitle>
                <p>No cards...</p>
                <button onClick={() => navigate('/')}>Go back to homepage</button>
            </div>
        );
    }

    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.cards}>
                {favoriteCards.map(card => (
                    <Card key={card.id} {...card} />
                ))}
            </ul>
        </div>
    );
};

export default Favorite;