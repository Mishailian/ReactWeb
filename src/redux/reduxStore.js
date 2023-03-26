import { combineReducers, createStore } from "redux";
import { ListOfDialogsReduser } from "./ListOfDialogs-reduser";

let redusers = combineReducers({ 'Dialog': ListOfDialogsReduser });
let store = createStore(redusers);


export default store;
