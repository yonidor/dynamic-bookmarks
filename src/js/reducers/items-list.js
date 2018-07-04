import initalState from '../store/initial-state'
import { generate_uuid } from '../utils/uuid'
import { SAVE_NEW_BOOKMARK } from '../actions/action-types'
import { extract_parameters } from '../utils/parameter_extractor'

export default function(state = initalState.itemsList, action) {

    switch(action.type){
        case SAVE_NEW_BOOKMARK:
            return [...state, {
                id: generate_uuid(),
                name: action.name,
                template: action.template,
                parameters: extract_parameters(action.template)
            }];
        default:
            return state
    }
} 