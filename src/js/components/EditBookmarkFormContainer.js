import React from 'react'
import EditBookmarkForm from './EditBookmarkForm'
import { saveExistingBookmark } from '../actions/actions'

import { connect } from 'react-redux'

const mapDispatchToProps = {
    saveExistingBookmark
};

export default connect(
    null,
    mapDispatchToProps
)(EditBookmarkForm);