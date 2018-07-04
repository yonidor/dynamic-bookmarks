import React from 'react'
import ReactDom from 'react-dom'
import List from '../components/list';
import UrlListItem from '../components/UrlListItem';
import ActionsPane from '../components/ActionsPane';
import ActionButton from '../components/ActionButton';
import { connect } from 'react-redux';
import UrlListItemContainer from '../components/UrlListItemContainer';
import { openBookmarkRequest } from '../actions/actions';
import { goTo } from 'route-lite';
import AddBookmarkPage from './AddBookmarkPage';

class UrlsListPage extends React.Component {
    constructor(props){
        super(props);
        this.goToAddBookmarkPage = this.goToAddBookmarkPage.bind(this);
    }

    goToAddBookmarkPage(){
        goTo(AddBookmarkPage);
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
                <ActionButton type='add-bookmark' onClick={ this.goToAddBookmarkPage }>Save</ActionButton>
            </ActionsPane>
        </div>
      );
    }
  }

 function mapStateToProps(state){
     return {
         urlItemsList: state.itemsList
     }
 } 


export default connect(
    mapStateToProps,
    null
)(UrlsListPage);

