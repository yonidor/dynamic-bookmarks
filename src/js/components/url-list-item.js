import styles from "../../scss/components/url-list-item.scss";
import React from 'react'

export default ({ name }) => {
    
    return (
        <li className={styles.urlListItem}>
            <div className={styles.content}>
                { name }
                <span className={styles.collapseButton}></span>
            </div>
            <div className={styles.actions}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </li>
    )   
}