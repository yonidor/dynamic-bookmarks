import styles from "../../scss/components/bookmark-list-item.scss";
import React from 'react'
import { goTo } from 'route-lite';
import EditBookmarkPage from "../pages/EditBookmarkPage";
import ActionButton from '../components/ActionButton';

export default class BookmarkListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parameterValues: {},
            isCollpsed: true
        }
        for (var i=0; i < props.parameters; i++)
            state.parameterValueChanged[parameters[i]] = "";
            
    }

    handleParameterValueChange(e) {
        var parameterValues = {...this.state.parameterValues}
        parameterValues[e.target.id] = e.target.value;
        this.setState({parameterValues})
    }

    toggleCollapse(){
        this.setState({isCollpsed: !this.state.isCollpsed});
    }

    handleKeyPress(event) {
        if(event.key == 'Enter'){
            this.props.openBookmarkRequest(this.props.template, this.state.parameterValues)
        }
      }

    render(){
        return (
            <li className={styles.BookmarkListItem + " " + (this.state.isCollpsed ? styles.collapsed : "") } onKeyPress={ this.handleKeyPress.bind(this) }>
                <div className={styles.content}>
                    <ActionButton type="collapse" size='small' additionalClassNames={ [styles.collapseBtn] } onClick={ this.toggleCollapse.bind(this) } />
                    <div className={styles.bookmarkName}>
                        { this.props.name } 
                    </div>
                    <div className={styles.bookmarkTemplate} title={ this.props.template }>
                        { this.props.template} 
                    </div>
                </div>
                <div className={ styles.parametersPrompt }>
                    { this.props.parameters.map(parameter => 
                        <div>
                            <label className={styles.paramLabel}> {parameter} </label>
                            <input  
                                id={parameter}
                                type="text"       
                                value={this.state.parameterValues[parameter]} 
                                onChange={ this.handleParameterValueChange.bind(this) } 
                             />
                        </div>
                    )}
                </div>
                <div className={styles.actions}>
                    <ActionButton type="edit" onClick={ () => goTo(EditBookmarkPage, {bookmark: this.props.bookmark}) } />
                    <ActionButton type="delete" onClick={ () => this.props.deleteBookmark(this.props.id) } />
                    <ActionButton type="open" onClick={ () => this.props.openBookmarkRequest(this.props.template, this.state.parameterValues) } />
                </div>
            </li>
        )       
    }
}