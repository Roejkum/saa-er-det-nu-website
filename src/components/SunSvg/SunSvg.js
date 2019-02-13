import React from 'react';
import styles from './SunSvg.module.scss';
import Sol from '../../../static/img/sol-solo.svg';
import Skies from '../../../static/img/skies-solo.svg';

const SunSvg = () => {

    return (
       <div data-depth="0.05">
       <img src={Skies} className={styles.skies} alt="Sol"/>

       <img src={Sol} className={styles.sol} alt="Sol"/>
       </div>
    );
}

export default SunSvg;