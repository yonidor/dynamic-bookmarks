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
    }

    render() {
      return (
        <div>
            <List>    
                {
                    this.props.bookmarks.map(bookmark =>
                        <BookmarkListItemContainer
                            key={bookmark.id}
                            {...bookmark}
                        />
                    )
                }
            </List>
            <ActionsPane>
                <ActionButton type='add-bookmark' onClick={ () => goTo(AddBookmarkPage) }> Add Bookmark </ActionButton>
            </ActionsPane>
        </div>
      );
    }
  }

 function mapStateToProps(state){
     return {
         bookmarks: state.bookmarks
     }
 } 


export default connect(
    mapStateToProps,
    null
)(BookmarksListPage);

