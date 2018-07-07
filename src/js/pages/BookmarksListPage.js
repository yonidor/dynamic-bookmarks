import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux';

import { goTo } from 'route-lite';

import List from '../components/list';
import BookmarkListItemContainer from '../components/BookmarkListItemContainer';

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
                            bookmark={bookmark}
                        />
                    )
                }
            </List>
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

