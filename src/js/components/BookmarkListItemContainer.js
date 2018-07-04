import React from 'react'
import BookmarkListItem from './BookmarkListItem'
import { openBookmarkRequest, deleteBookmark } from '../actions/actions'

import { connect } from 'react-redux'

const mapDispatchToProps = {
    openBookmarkRequest,
    deleteBookmark
};

export default connect(
    null,
    mapDispatchToProps
)(BookmarkListItem);