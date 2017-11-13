import { GET_CARS, LOADING } from "../actions/consts";
export default (state = {loading: false, cars: []}, action) => {
    switch(action.type) {
        case 'GET_CARS':
            return {...state, loading: false, cars: action.payload};
        case 'LOADING':
            return {...state, loading: true}
        default: 
            return state
    }
}