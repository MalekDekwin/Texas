import { createStore , combineReducers} from "redux";
import getProducts from "./reducers/getProduct";

const reducers = combineReducers({
  getProducts
})
const store = createStore(reducers);
export default store;
