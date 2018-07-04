import { SAVE_NEW_BOOKMARK } from './action-types'
import { render } from '../utils/template-renderer'

export function openBookmarkRequest(template, parameterValues){
    return (dispatch) => {
        chrome.tabs.create({url: render(template,parameterValues)});
    }
}

export function saveNewBookmark(name, template){
    return (dispatch) => {
        dispatch({
            type: SAVE_NEW_BOOKMARK,
            name: name,
            template: template
        });
    }
}