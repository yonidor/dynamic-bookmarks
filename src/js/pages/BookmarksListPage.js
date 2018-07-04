import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux';

import { goTo } from 'route-lite';

import List from '../components/list';
import BookmarkListItemContainer from '../components/BookmarkListItemContainer';
import AddBookmarkPage from './AddBookmarkPage';
import BookmarkListItem from '../components/BookmarkListItem';
import ActionsPane from '../components/ActionsPane';
import ActionButton from '../components/ActionButton';

class BookmarksListPage extends React.Component {
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
                        <BookmarkListItemContainer
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
)(BookmarksListPage);

