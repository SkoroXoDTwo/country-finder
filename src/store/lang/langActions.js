import { CHANGE_LANG } from "./langConst";

export const changeLang = (value) => ({
  type: CHANGE_LANG,
  payload: value,
});
