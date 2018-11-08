import {CHANGE_ROUTE} from "./NavConstants";

export const setRoute = (route) =>({
    type: CHANGE_ROUTE,
    payload: route
});