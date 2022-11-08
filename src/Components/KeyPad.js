import React, { useContext } from 'react'
import DisplayContext from '../store/context'
import styles from './KeyPad.module.css'

const KeyPad = () => {
    const ctx = useContext(DisplayContext)
    return (
        <div className={styles.keysContainer}>
            <div className={styles.keys} id={styles["CE"]} onClick={() => { ctx.handleDisplay("CE") }} >C/CE</div>
            <div className={styles.keys} id="key2" onClick={() => { ctx.handleDisplay("OFF") }}>OFF</div>
            <div className={styles.keys} id="key3" onClick={() => { ctx.handleDisplay("Root") }}>&#8730;</div>
            <div className={styles.keys} id="key4" onClick={() => { ctx.handleDisplay("%") }}>%</div>
            <div className={styles.keys} id="key5" onClick={() => { ctx.handleDisplay("MRC") }}>MRC</div>
            <div className={styles.keys} id="key6" onClick={() => { ctx.handleDisplay("M-") }}>M-</div>
            <div className={styles.keys} id="key7" onClick={() => { ctx.handleDisplay("M+") }}>M+</div>
            <div className={styles.keys} id="key8" onClick={() => { ctx.handleDisplay("/") }}>&#247;</div>
            <div className={styles.keys} id="key9" onClick={() => { ctx.handleDisplay("7") }}>7</div>
            <div className={styles.keys} id="key10" onClick={() => { ctx.handleDisplay("8") }} >8</div>
            <div className={styles.keys} id="key11" onClick={() => { ctx.handleDisplay("9") }} >9</div>
            <div className={styles.keys} id="key12" onClick={() => { ctx.handleDisplay("*") }} >X</div>
            <div className={styles.keys} id="key13" onClick={() => { ctx.handleDisplay("4") }} >4</div>
            <div className={styles.keys} id="key14" onClick={() => { ctx.handleDisplay("5") }} >5</div>
            <div className={styles.keys} id="key15" onClick={() => { ctx.handleDisplay("6") }} >6</div>
            <div className={styles.keys} id="key16" onClick={() => { ctx.handleDisplay("-") }} >-</div>
            <div className={styles.keys} id="key17" onClick={() => { ctx.handleDisplay("1") }} >1</div>
            <div className={styles.keys} id="key18" onClick={() => { ctx.handleDisplay("2") }} >2</div>
            <div className={styles.keys} id="key19" onClick={() => { ctx.handleDisplay("3") }} >3</div>
            <div className={styles.keys} id={styles["plusKey"]} onClick={() => { ctx.handleDisplay("+") }}>+</div>
            <div className={styles.keys} id="key21" onClick={() => { ctx.handleDisplay("0") }} >0</div>
            <div className={styles.keys} id="key22" onClick={() => { ctx.handleDisplay(".") }} >.</div>
            <div className={styles.keys} id="key23" onClick={() => { ctx.handleDisplay("=") }} >=</div>
        </div>
    )
}

export default KeyPad