import React from 'react'
import styles from './Display.module.css'


const Display = ({DisplayValue}) => {
  return (
    <div>
        <input className={styles.display} type="text" value={DisplayValue} readOnly  />
      
    </div>
  )
}

export default Display
