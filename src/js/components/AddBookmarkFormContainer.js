import React from 'react'
import AddBookmarkForm from './AddBookmarkForm'
import { saveNewBookmark } from '../actions/actions'

import { connect } from 'react-redux'

const mapDispatchToProps = {
    saveNewBookmark
};

export default connect(
    null,
    mapDispatchToProps
)(AddBookmarkForm);