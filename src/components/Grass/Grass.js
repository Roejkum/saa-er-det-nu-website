import React from 'react';
import styles from './Grass.module.scss';
import grass1 from "../../../static/img/grass-1.svg";
import grass2 from "../../../static/img/grass-2.svg";
import grass3 from "../../../static/img/grass-3.svg";
import grass4 from "../../../static/img/grass-4.svg";


const Grass = () => {

    return (
        <>
        <svg className={[styles.grass, styles.grass1].join(' ')} xmlns="http://www.w3.org/2000/svg" width="1694.59" height="42.628" viewBox="0 0 1694.59 27"><path d="M1317.521,377.325c-225.551-.58-475.3,42.025-742.822,24.43s-269.246,18.193-269.246,18.193h1690.68s39.174-2.552-130.478-13.207S1493.677,377.778,1317.521,377.325Z" transform="translate(-305.453 -377.319)" fill="#4e6839"/></svg>
        <img src={grass2} alt="grass" className={[styles.grass, styles.grass2].join(' ')} data-depth="0.3"/>
        <img src={grass3} alt="grass" className={[styles.grass, styles.grass3].join(' ')} data-depth="0.2"/>
        <img src={grass4} alt="grass" className={[styles.grass, styles.grass4].join(' ')} data-depth="0.1"/>
        </>
    );
}

export default Grass;