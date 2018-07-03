import styles from '../../scss/components/list.scss'
import React from 'react'

export default ({children}) => (
    <ul className={ styles.list }>
        {children}
    </ul>
)