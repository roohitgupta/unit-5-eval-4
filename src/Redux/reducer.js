import { LOGIN } from "./actions"

const init = { user: null };


export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...store,user:[payload]};
    default:
      return store;
  }
};
