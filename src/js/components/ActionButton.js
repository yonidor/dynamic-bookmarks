import styles from '../../scss/components/action-button.scss';
import React from 'react';

export default (props) => {
    return (
        <button className={ styles.actionBtn } onClick={ props.onClick }>
            {props.children}
        </button>
    ) 
}