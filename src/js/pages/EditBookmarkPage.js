import React from 'react'
import ReactDom from 'react-dom'

import EditBookmarkFormContainer from '../components/EditBookmarkFormContainer'

const EditBookmarkPage = (props) =>  
(
    <div>
        <EditBookmarkFormContainer {...props.bookmark} >
        </EditBookmarkFormContainer>
    </div>
);

export default EditBookmarkPage;

