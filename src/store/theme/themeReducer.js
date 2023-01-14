import { CHANGE_THEME } from "./themeConst";

export const themeReducer = (state = "light", action) => {
  switch(action.type) {
    case CHANGE_THEME:
      return state === "light" ? "dark" : "light";

    default: return state;
  }
}
