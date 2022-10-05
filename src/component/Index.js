import listReducer from "./listReducer";
import ActorReducer from "./ActorReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userData: listReducer,
  actorData: ActorReducer
});
export default rootReducer;
