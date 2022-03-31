import React, { createContext, useContext, useReducer } from 'react';
import { FiltersActions, Keys, Orders } from '../common/constant';

const initialState = {
    genres: [],
    order: null,
    bpm: null,
    key: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case FiltersActions.setGenre:
            return {
                ...state,
                genres: action.genres,
            };
        case FiltersActions.setBpm:
            if (Number.isInteger(action.bpm)) {
                return {
                    ...state,
                    bpm: action.bpm,
                };
            }
            return state;
        case FiltersActions.setKey:
            if (Keys.includes(action.key)) {
                return {
                    ...state,
                    key: action.key,
                };
            }
            return state;
        case FiltersActions.setOrder: {
            if (Orders.includes(action.order)) {
                return {
                    ...state,
                    order: action.order,
                };
            }
            return state;
        }
        default:
            return state;
    }
};

const FiltersContext = createContext();

export const FiltersConsumerHook = () => useContext(FiltersContext);
// eslint-disable-next-line react/prop-types
export const FiltersProvider = ({ children }) => (
    <FiltersContext.Provider value={useReducer(reducer, initialState)}>{children}</FiltersContext.Provider>
);
