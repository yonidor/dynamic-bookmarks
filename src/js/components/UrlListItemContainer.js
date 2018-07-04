import React from 'react'
import UrlListItem from './UrlListItem'
import { openBookmarkRequest } from '../actions/actions'

import { connect } from 'react-redux'

const mapDispatchToProps = {
    openBookmarkRequest
};

export default connect(
    null,
    mapDispatchToProps
)(UrlListItem);