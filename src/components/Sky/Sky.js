import React from 'react';
import styles from './Sky.module.scss';
import sky1 from "../../../static/img/sky1.svg";
import sky2 from "../../../static/img/sky2.svg";
import sky3 from "../../../static/img/sky3.svg";


const Sky = () => {

    return (
        <>
        <img src={sky3} alt="sky1" className={[styles.grass, styles.grass2].join(' ')} data-depth="0.1"/>
        <img src={sky2} alt="sky2" className={[styles.grass, styles.grass3].join(' ')} data-depth="0.2"/>
        <img src={sky1} alt="sky3" className={[styles.grass, styles.grass4].join(' ')} data-depth="0.3"/>
        </>
    );
}

export default Sky;