import { OPEN_BOOKMARK_REQUEST } from './action-types'
import { render } from '../utils/template-renderer'

export function openBookmarkRequest(template, parameterValues){
    return (dispatch) => {
        chrome.tabs.create({url: render(template,parameterValues)});
    }
}