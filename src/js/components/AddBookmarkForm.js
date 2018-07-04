import React from 'react'
import { Link, goTo } from 'route-lite';
import BookmarksListPage from "../pages/BookmarksListPage";

export default class AddBookmarkForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onTemplateChange = this.onTemplateChange.bind(this);
        this.onSave = this.onSave.bind(this);
        
        this.state = {
            name: "",
            template: "",
        }   
    }

    onSave(e){
        this.props.saveNewBookmark(this.state.name, this.state.template);
        goTo(BookmarksListPage);
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    onTemplateChange(e) {
        this.setState({
            template: e.target.value
        })
    }

    render(){
        return (
            <div>
                <div>
                    <label>Name</label>
                    <input onChange={ this.onNameChange } />
                </div>
                
                <div>
                    <label>Template</label>
                    <input onChange={ this.onTemplateChange } />
                </div>

                <button onClick={ this.onSave }> Save </button>
            </div>
        )       
    }
}