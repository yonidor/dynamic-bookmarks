import React from 'react'
import UrlListItem from './UrlListItem'
import { openBookmarkRequest, deleteBookmark } from '../actions/actions'

import { connect } from 'react-redux'

const mapDispatchToProps = {
    openBookmarkRequest,
    deleteBookmark
};

export default connect(
    null,
    mapDispatchToProps
)(UrlListItem);