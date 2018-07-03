import React from 'react'
import ReactDom from 'react-dom'
import List from '../components/list';
import UrlListItem from '../components/url-list-item';
import ActionsPane from '../components/actions-pane';
import ActionButton from '../components/action-button';
import { connect } from 'react-redux';

class Page1 extends React.Component {
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
)(Page1);

