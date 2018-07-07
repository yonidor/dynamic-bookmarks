import styles from '../../scss/components/action-button.scss';
import React from 'react';
import cn from 'classnames';

export default (props) => {
    return (
        <button className={ cn(styles.actionBtn, 
                               styles[props.type + "Btn"], 
                               renderAdditionalClassNames(props.additionalClassNames),
                               styles[props.size] || styles['medium']) } 
                onClick={ props.onClick }>
            {props.children}
        </button>
    ) 
}

const renderAdditionalClassNames = (classNames) => {
    if (!classNames) return null;
    if (!(classNames instanceof Array)) return null;

    return classNames.reduce((classes, currentClass) => {
        classes[currentClass] = true; 
        return classes;
    }, {})
}

