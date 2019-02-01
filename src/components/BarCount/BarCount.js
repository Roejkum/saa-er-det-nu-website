import React from 'react';
import styles from './barcount.module.scss';

const BarCount = ({ totalAmount, amount }) => {
    let percentage = 0
    let amountTitle = '';
    let error = false
    if( amount >= 0) {
        amountTitle = amount;
        percentage = (amount / totalAmount) * 100;
    } else {
        amountTitle = amount;
        error = true;
    }
    return (
        <div className={styles.barcountWrapper}>
            <p className={error ? styles.errorMessage : ''} style={{left: percentage ? percentage + '%' : 0}}>{amountTitle}</p>
            <p>{totalAmount}</p>
            <div className={styles.barBackdrop}>
                <div className={styles.bar} style={{width: percentage + '%'}}>
                </div>
            </div>
        </div>
    );
}

export default BarCount;