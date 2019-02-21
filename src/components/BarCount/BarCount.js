import React from 'react';
import styles from './barcount.module.scss';

const BarCount = class extends React.Component {
    state = {
        totalAmount: 100000,
        amount: null,
        percentage: 0,
        amountTitle: '',
        error: false,
        totalTitle: 0,
        firstGoalCompleted: false,
        secondGoalCompleted: false,
        thirdGoalCompleted: false
    }


    componentWillReceiveProps = (props) => {

        const newAmount = props.amount;

        if( newAmount < 10000 ) {
            this.setAllState(newAmount, 10000, false, false, false, false);
        } else if( newAmount >= 10000 && newAmount < 50000 ) {
            this.setAllState(newAmount, 50000, true, false, false, false);
        } else if ( newAmount >= 50000 && newAmount < 100000) {
            this.setAllState(newAmount, 100000, true, true, false, false);
        } else if ( newAmount >= 100000 ) {
            this.setAllState(newAmount, 100000, true, true, true, false);
        } else {
            this.setAllState(0, 100000, false, false, false, true);
        }
    }
    
    setAllState = (amount, totalAmount, firstGoal, secondGoal, thirdGoal, error) => {
        if( amount < totalAmount ) {
            const newPercentage = (amount / totalAmount) * 100;
            this.setState({
                amountTitle: amount,
                totalTitle: totalAmount,
                percentage: newPercentage,
                amount: amount,
                totalAmount: totalAmount,
                firstGoalCompleted: firstGoal,
                secondGoalCompleted: secondGoal,
                thirdGoalCompleted: thirdGoal,
                error: error
            });
        } else {
            this.setState({
                amountTitle: amount,
                percentage: 100,
                totalTitle: '',
                amount: amount,
                totalAmount: totalAmount,
                firstGoalCompleted: firstGoal,
                secondGoalCompleted: secondGoal,
                thirdGoalCompleted: thirdGoal,
                error: error
            });
        };
        
    }
 
    render() {

        return (
            <>
            <div className={styles.barcountWrapper}>
                <p className={this.state.error ? styles.errorMessage : ''} style={{left: this.state.percentage ? this.state.percentage + '%' : 0}}>{this.state.amountTitle ? this.state.amountTitle : 'Kunne ikke hente data' }</p>
                
                <div className={styles.barBackdrop}>
                    <div className={styles.bar} style={{width: this.state.percentage + '%'}}>
                    </div>
                
                </div>
                <p className={styles.totalTitle}>{this.state.totalTitle}</p>
                
            </div>
            <div className={[styles.goals, "flex align-center"].join(' ')}>
                <p>Delmål:</p>
                <div className="flex align-center"><div className={ this.state.firstGoalCompleted ? styles.completedGoal : styles.uncompletedGoal }></div><p>10.000</p></div>
                <div className="flex align-center"><div className={ this.state.secondGoalCompleted ? styles.completedGoal : styles.uncompletedGoal }></div><p>50.000</p></div>
                <div className="flex align-center"><div className={ this.state.thirdGoalCompleted ? styles.completedGoal : styles.uncompletedGoal }></div><p>100.000</p></div>
                
            </div>
            </>
        )
    }
}

export default BarCount;