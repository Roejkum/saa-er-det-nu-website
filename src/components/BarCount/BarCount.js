import React, { Component } from 'react';
import styles from './barcount.module.scss';

console.log(styles);

class BarCount extends Component {    

    componentDidUpdate() {
       this.loadedHandler();
    }

    loadedHandler = () => {
        const totalAmount = this.props.totalAmount;
        const amount = this.props.amount;
        const percentage = (amount / totalAmount) * 100;
    }
    render() {
        const totalAmount = this.props.totalAmount;
        const amount = this.props.amount;
        const percentage = (amount / totalAmount) * 100;
        let amountTitle = '';
        if( amount ) {
            amountTitle = amount;
        }
        return (
            <div className={styles.barcountWrapper}>
                <p style={{left: percentage + '%'}}>{amountTitle}</p>
                <p>{totalAmount}</p>
                <div className={styles.scalingSvgContainer}>
                    <svg className={styles.scalingSvg} xmlns="http://www.w3.org/2000/svg" width="100" height="2" viewBox="0 0 100 2"><g transform="translate(-177 -264.855)"><rect width="100" height="2" rx="1" transform="translate(177 264.855)" fill="#4e6839"/><rect width={percentage} height="2" rx="1" transform="translate(177 264.855)" fill="#80b35b"></rect></g></svg>
                </div>
            </div>
        );
    }
}

export default BarCount;