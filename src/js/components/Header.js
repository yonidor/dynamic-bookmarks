import styles from '../../scss/components/header.scss'
import React from 'react'
import { goTo } from 'route-lite';

import ActionButton from './ActionButton';
import AddBookmarkPage from '../pages/AddBookmarkPage';

export default () => {
    return (
        <header className={ styles.header }>
            <ActionButton type='add' size='small' additionalClassNames={ [styles.addBtn] } onClick={ () => goTo(AddBookmarkPage)} />
            Dynamic Bookmarks
        </header>
    )
}