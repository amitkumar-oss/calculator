import React from 'react'
import styles from './ButtonsContainer.module.css'

const ButtonsContainer = ({ onButtonClick }) => {

    const buttonName = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/']
    return (

        <div className={styles.buttonsContainer}>

            {buttonName.map((item, index) => {
                return <button key={index} className={styles.button} onClick={() => onButtonClick(item)}>{item}</button>
            })}



        </div>



    )
}

export default ButtonsContainer
