import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import contact from "./slices/contact.ts";
import chart from "./slices/chart.ts";
// slices

// ----------------------------------------------------------------------

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  contact: contact,
  chart: chart,
});

export { rootPersistConfig, rootReducer };
