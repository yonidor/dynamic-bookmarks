import initalState from '../store/initial-state'

export default function(state = initalState.itemsList, action) {
    console.log("Action: " + action.type);

    return state;
}