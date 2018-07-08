import React from 'react'
import BookmarkForm from './BookmarkForm'
import { saveExistingBookmark } from '../actions/actions'

import { connect } from 'react-redux'
import { goTo } from 'route-lite';
import BookmarksListPage from '../pages/BookmarksListPage';

const mapDispatchToProps = {
    onBookmarkSaved: (bookmarkId, name, template) => {
        goTo(BookmarksListPage);
        return saveExistingBookmark(bookmarkId, name, template);
    }
};

export default connect(
    null,
    mapDispatchToProps
)(BookmarkForm);