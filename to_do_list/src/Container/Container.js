import React from "react";
import styles from './Container.module.scss';

const Container = (props) => {
    return (<div className={styles.div}>{props.children}</div>);
};

export default Container;
