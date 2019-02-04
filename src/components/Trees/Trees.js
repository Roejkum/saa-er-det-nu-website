import React from 'react';
import styles from './Trees.module.scss';
import Tree from '../../../static/img/tree.svg';

const Trees = () => {

    return (
       <div className={styles.trees}>
        <img src={Tree} className={[styles.treeOne, styles.tree].join(' ')} alt="Tree"/>
        <img src={Tree} className={styles.treeTwo} alt="Tree"/>
        <img src={Tree} className={styles.treeThree} alt="Tree"/>
        <img src={Tree} className={styles.treeFour} alt="Tree"/>
        <img src={Tree} className={styles.treeFive} alt="Tree"/>
        <img src={Tree} className={styles.treeSix} alt="Tree"/>
       </div>
    );
}

export default Trees;