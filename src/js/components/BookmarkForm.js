import React from 'react'
import { Link, goTo } from 'route-lite';
// import BookmarksListPage from "../pages/BookmarksListPage";
import { extract_parameters } from '../utils/parameter_extractor';

export default class BookmarkForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onTemplateChange = this.onTemplateChange.bind(this);
        
        this.state = {
            name: props.name || "",
            template: props.template || ""
        }   
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
                <div>
                    <label>Parameters: </label>
                    <label>{ extract_parameters(this.state.template).join(', ') }</label>
                </div>

                <button onClick={ () => this.props.onBookmarkSaved(this.props.id, this.state.name, this.state.template) }> Save </button>
            </div>
        )       
    }
}