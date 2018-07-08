import React from 'react'
import BookmarkForm from './BookmarkForm'
import { saveNewBookmark } from '../actions/actions'

import { connect } from 'react-redux'
import { goTo } from 'route-lite';
import BookmarksListPage from '../pages/BookmarksListPage';

const mapDispatchToProps = {
    onBookmarkSaved: (_, name, template) => {
        goTo(BookmarksListPage);
        return saveNewBookmark(name, template);
    }
};

export default connect(
    null,
    mapDispatchToProps
)(BookmarkForm);