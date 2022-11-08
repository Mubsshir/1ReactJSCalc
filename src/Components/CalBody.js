import React from 'react'
import styles from './CalBody.module.css'
import CalHeader from './CalHeader'
import KeyPad from './KeyPad'
const CalBody = () => {
    return (
        <div className={styles.calBody}>
            <CalHeader />
            <KeyPad />
        </div>
    )
}

export default CalBody