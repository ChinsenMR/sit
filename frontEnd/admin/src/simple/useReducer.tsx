type AppState = {};
type Action =
  | { type: "SET_ONE"; payload: string }
  | { type: "SET_TWO"; payload: number };
 
export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_ONE":
      return {
        ...state,
        one: action.payload // `payload` is string
      };
    case "SET_TWO":
      return {
        ...state,
        two: action.payload // `payload` is number
      };
    default:
      return state;
  }
}
