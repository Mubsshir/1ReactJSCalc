import React, { useContext } from 'react'
import DisplayContext from '../store/context';
import styles from './CalHeader.module.css'
import Logo from './Logos/casio.svg'
const CalHeader = (props) => {
    const ctx = useContext(DisplayContext);

    return (
        <header className={styles.calHeader}>
            <img src={Logo} alt="" />
            <div className={ctx.DisplayIsOn ? styles.display : styles.offDisplay}>{ctx.displayText}</div>
        </header>
    )
}
export default CalHeader;