import React from 'react'
import ReactDom from 'react-dom'
import List from '../components/list';
import UrlListItem from '../components/UrlListItem';
import ActionsPane from '../components/ActionsPane';
import ActionButton from '../components/ActionButton';
import { connect } from 'react-redux';

class UrlsListPage extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // goTo(Page2);
    } 

    render() {
      return (
        <div>
            <List>    
                {
                    this.props.urlItemsList.map(urlItem =>
                        <UrlListItem
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

