import React from 'react'
import { Link, goTo } from 'route-lite';
import BookmarksListPage from "../pages/BookmarksListPage";

export default class EditBookmarkForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onTemplateChange = this.onTemplateChange.bind(this);
        this.onSave = this.onSave.bind(this);
        
        this.state = {
            name: props.name,
            template: props.template,
        }   
    }

    onSave(e){
        this.props.saveExistingBookmark(this.props.id, this.state.name, this.state.template);
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
                    <input value={ this.state.name } onChange={ this.onNameChange } />
                </div>
                
                <div>
                    <label>Template</label>
                    <input value={ this.state.template } onChange={ this.onTemplateChange } />
                </div>

                <button onClick={ this.onSave }> Save </button>
            </div>
        )       
    }
}