import {combineReducers, compose, legacy_createStore} from "redux";
import {CounterReducer} from "./reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    counter: CounterReducer
})



let preloaderState;
const persistedTodoString = localStorage.getItem('app-state')
if(persistedTodoString){
    preloaderState = JSON.parse(persistedTodoString)
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, preloaderState, composeEnhancers())

store.subscribe(()=> {
    localStorage.setItem('app-state',JSON.stringify(store.getState()))
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store