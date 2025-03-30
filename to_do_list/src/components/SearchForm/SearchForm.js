import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();
    const searchString = useSelector(state=>state.searchString)
    const [searchTerm, setSearchTerm] = useState(searchString);
      


    useEffect (() => {
        setSearchTerm(searchString);
    },[searchString]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString( searchTerm ));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search..."/>
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
};

export default SearchForm;