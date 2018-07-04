import React from 'react'
import ReactDom from 'react-dom'
import List from '../components/list';
import UrlListItem from '../components/UrlListItem';
import ActionsPane from '../components/ActionsPane';
import ActionButton from '../components/ActionButton';
import { connect } from 'react-redux';
import UrlListItemContainer from '../components/UrlListItemContainer';
import { openBookmarkRequest } from '../actions/actions';

class UrlsListPage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
        <div>
            <List>    
                {
                    this.props.urlItemsList.map(urlItem =>
                        <UrlListItemContainer
                            key={urlItem.id}
                            {...urlItem}
                        />
                    )
                }
            </List>
            <ActionsPane>
                <ActionButton type='add-url'></ActionButton>
            </ActionsPane>
        </div>
        
      );
    }
  }

 function mapStateToProps(state){
     return {
         urlItemsList: state.itemsList.items
     }
 } 


export default connect(
    mapStateToProps,
    null
)(UrlsListPage);

