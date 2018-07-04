import React from 'react'
import UrlListItem from './UrlListItem'
import { 
    openBookmarkRequest, 
    parameterValueChanged
} from '../actions/actions'

import { connect } from 'react-redux'

const mapDispatchToProps = {
    openBookmarkRequest,
    parameterValueChanged
};

export default connect(
    null,
    mapDispatchToProps
)(UrlListItem);