import React from 'react';
import styles from './barcount.module.scss';

const BarCount = ({ totalAmount, amount }) => {
    let percentage = 0;
    let amountTitle = '';
    let error = false;
    let totalTitle = 0;
    if( amount >= 0 && amount < totalAmount ) {
        amountTitle = amount;
        totalTitle = totalAmount;
        percentage = (amount / totalAmount) * 100;
    } else if( amount >= totalAmount) {
        amountTitle = amount;
        percentage = 100;
        totalTitle = '';
    } else {
        amountTitle = amount;
        error = true;
        totalTitle = totalAmount;
    }
    return (
        <div className={styles.barcountWrapper}>
            <p className={error ? styles.errorMessage : ''} style={{left: percentage ? percentage + '%' : 0}}>{amountTitle}</p>
            <p>{totalTitle}</p>
            <div className={styles.barBackdrop}>
                <div className={styles.bar} style={{width: percentage + '%'}}>
                </div>
            </div>
        </div>
    );
}

export default BarCount;