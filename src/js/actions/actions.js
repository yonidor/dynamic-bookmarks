import { OPEN_BOOKMARK_REQUEST, PARAMETER_VALUE_CHANGED } from './action-types'

export function parameterValueChanged(bookmarkId,parameterKey, newValue){
    return (dispatch) => {
        dispatch({
            type: PARAMETER_VALUE_CHANGED,
            bookmarkId: bookmarkId,
            newValue: newValue
        });
    }
}

export function openBookmarkRequest(template, parameterValues){
    return (dispatch) => {
        chrome.tabs.create({url: template + "/" + Object.values(parameterValues).join("/")});
    }
}