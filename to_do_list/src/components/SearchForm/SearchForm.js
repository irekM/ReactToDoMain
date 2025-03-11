import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString({ searchTerm }));
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