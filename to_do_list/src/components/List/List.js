import styles from "./List.module.scss";
import Column from "../Column/Column";
import ColumnForm from "../ColumnForm/ColumnForm";
import SearchForm from "../SearchForm/SearchForm.js"
import { useSelector } from "react-redux";
import { getColumnsByList, getListById } from "../../redux/store";
import { useParams } from "react-router-dom";

const List = () => {

    const { listId } = useParams();

    // const listId = 1;
    const columns = useSelector(state => getColumnsByList(state, listId));

    const listData = useSelector(state => getListById(state, listId));

    
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>
                    {listData.title}<span>soon</span>
                </h2>
                
            </header>
            <div>
                <p className={styles.description}>
                    {listData.description}
                </p>
                <SearchForm/>
            </div>
           
            <section className={styles.columns}>
                {columns.map(column => (
                    <Column 
                    key={column.id} 
                    {...column}
                    />
                ))}
            </section>
            <ColumnForm lsitId={listId} />
        </div>
    );
};

export default List;