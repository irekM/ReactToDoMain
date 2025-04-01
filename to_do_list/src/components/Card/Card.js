import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({id, title, isFavorite}) => {

    const dispatch = useDispatch();

    const handleFavoriteClick = () => {
        dispatch(toggleCardFavorite(id));
    };


    return (
        <li className={styles.card}>{title}
        <button className={clsx(styles.favoriteButton, isFavorite && styles.isFavorite)}
                onClick={handleFavoriteClick}>
            <i className={isFavorite ? "fa fa-star" : "fa fa-star-o"} />
        </button>
        </li>
    );
};

export default Card