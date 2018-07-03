import styles from "../../scss/components/url-list-item.scss";
import React from 'react'

export default class UrlListItem extends React.Component {
    constructor(props) {
        super(props);
        this.openInNewTab = this.openInNewTab.bind(this);
        this.state = {
            parameterInputtedValues: {}
        };
    }

    openInNewTab() {
        chrome.tabs.create({ url: this.props.url });
    }

    render(){
        return (
            <li className={styles.urlListItem}>
                <div className={styles.content}>
                    { this.props.name }
                    <span className={styles.collapseButton}></span>
                </div>
                <div className={ styles.parametesPrompt }>
                    {/* <ParameterInput></ParameterInput> */}
                </div>
                <div className={styles.actions}>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button onClick={this.openInNewTab}>Open</button>
                </div>
            </li>
        )       
    }
}