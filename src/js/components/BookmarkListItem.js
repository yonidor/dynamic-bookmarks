import styles from "../../scss/components/bookmark-list-item.scss";
import React from 'react'

export default class BookmarkListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parameterValues: {}
        }
        for (var i=0; i < props.parameters; i++)
            state.parameterValueChanged[parameters[i]] = "";
            
    }

    handleParameterValueChange(e) {
        var parameterValues = {...this.state.parameterValues}
        parameterValues[e.target.id] = e.target.value;
        this.setState({parameterValues})
    }

    render(){
        return (
            <li className={styles.BookmarkListItem}>
                <div className={styles.content}>
                    <span className={styles.bookmarkName}>{ this.props.name } </span>
                    <span className={styles.bookmarkTemplate}>{ this.props.template} </span>
                    <span className={styles.collapseButton}></span>
                </div>
                <div className={ styles.parametesPrompt }>
                    { this.props.parameters.map(parameter => 
                        <div>
                            <label> {parameter} </label>
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
                    <button>Edit</button>
                    <button onClick={ () => this.props.deleteBookmark(this.props.id) }> Delete</button>
                    <button onClick={ () => this.props.openBookmarkRequest(this.props.template, this.state.parameterValues) }>Open</button>
                </div>
            </li>
        )       
    }
}