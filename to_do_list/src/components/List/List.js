import styles from "./List.module.scss";
import Column from "../Column/Column";
import ColumnForm from "../ColumnForm/ColumnForm";
import { useSelector } from "react-redux";
import { getColumnsByList, getListById } from "../../redux/store";

const List = () => {

    const listId = 1;
    const columns = useSelector(state => getColumnsByList(state, listId));

    const listData = useSelector(state => getListById(state, listId));

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>
                    {listData.title}<span>soon</span>
                </h2>
                <p className={styles.description}>
                    {listData.description}
                </p>
            </header>
            <section className={styles.columns}>
                {columns.map(column => (
                    <Column 
                    key={column.id} 
                    {...column}
                    />
                ))}
            </section>
            <ColumnForm/>
        </div>
    );
};

export default List;