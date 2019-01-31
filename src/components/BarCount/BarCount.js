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
            <p className={error ? styles.errorMessage : ''} style={{left: percentage + '%'}}>{amountTitle}</p>
            <p>{totalAmount}</p>
            <div className={styles.scalingSvgContainer}>
                <svg className={styles.scalingSvg} xmlns="http://www.w3.org/2000/svg" width="100" height="2" viewBox="0 0 100 2" preserveAspectRatio="none"><g transform="translate(-177 -264.855)"><rect width="100" height="2" rx="1" transform="translate(177 264.855)" fill="#4e6839"/><rect width={percentage} height="2" rx="1" transform="translate(177 264.855)" fill="#80b35b"></rect></g></svg>
            </div>
        </div>
    );
}

export default BarCount;