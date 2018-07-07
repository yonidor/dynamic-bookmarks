import { SAVE_NEW_BOOKMARK, DELETE_BOOKMARK, SAVE_EXISTING_BOOKMARK } from './action-types'
import { render } from '../utils/template-renderer'

export function openBookmarkRequest(template, parameterValues){
    return (dispatch) => {
        chrome.tabs.create({url: render(template,parameterValues)});
    }
}

export function deleteBookmark(bookmarkId){
    return (dispatch) => {
        dispatch({
            type: DELETE_BOOKMARK,
            bookmarkId: bookmarkId
        });
    }
}

export function saveExistingBookmark(bookmarkId, name, template){
    return (dispatch) => {
        dispatch({
            type: SAVE_EXISTING_BOOKMARK,
            bookmarkId: bookmarkId,
            name: name,
            template: template
        });
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