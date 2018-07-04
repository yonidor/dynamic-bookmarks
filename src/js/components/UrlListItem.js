import styles from "../../scss/components/url-list-item.scss";
import React from 'react'
import EditUrlPage from '../pages/EditUrlPage'
import { Link } from 'route-lite';

export default class UrlListItem extends React.Component {
    constructor(props) {
        super(props);
        this.openInNewTab = this.openInNewTab.bind(this);
        this.state = {
            parameterValues: {

            }
        }
        for (var i=0; i < props.parameters; i++)
            state.parameterValueChanged[parameters[i]] = "";
            
    }

    openInNewTab() {
        this.props.openBookmarkRequest(this.props.template, this.state.parameterValues);
    }

    handleChange(e) {
        var parameterValues = {...this.state.parameterValues}
        parameterValues[e.target.id] = e.target.value;
        this.setState({parameterValues})
    }

    render(){
        return (
            <li className={styles.urlListItem}>
                <div className={styles.content}>
                    { this.props.name }
                    <span className={styles.collapseButton}></span>
                </div>
                <div className={ styles.parametesPrompt }>
                    { this.props.parameters.map(parameter => 
                        <input  
                            type="text"       
                            value={this.state.parameterValues[parameter]} 
                            onChange={ this.handleChange.bind(this) } 
                            id={parameter} />
                    )}
                </div>
                <div className={styles.actions}>
                    <button>Edit</button>
                    <Link component={ EditUrlPage }> LALALA </Link>
                    <button>Delete</button>
                    <button onClick={ this.openInNewTab }>Open</button>
                </div>
            </li>
        )       
    }
}