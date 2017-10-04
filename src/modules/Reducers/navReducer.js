import * as types from './constants/actionTypes'

const navReducer = (state = {
        showMenu: false,
        showFinanceSubmenu: false,
        financeTypes: null
    }, action) => {
    switch (action.type) {
        case types.SET_SHOW_FINANCE_SUBMENU:
            state = {
                ...state,
                showFinanceSubmenu: action.payload
            };
            break;
        case types.SET_SHOW_MENU:
            state = {
                ...state,
                showMenu: action.payload
            };
            break;
    }
    return state;
};

export default navReducer;