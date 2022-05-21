import {createStore, combineReducers} from "redux";
import {cashReducer} from "./reducers/cashReducer";
import {customerReducer} from "./reducers/customerReducer";
import {eventsReducer} from "./reducers/eventsReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    events: eventsReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
