import {SET_SHOW_FINANCE_SUBMENU, SET_SHOW_MENU} from '../constants/actionTypes'

export function setShowFinanceSubmenu(value) {
    return {
        type: SET_SHOW_FINANCE_SUBMENU,
        payload: value
    };
}

export function setShowMenu(value) {
    return {
        type: SET_SHOW_MENU,
        payload: value
    };
}