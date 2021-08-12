// to set up the data layer- react context api
//we need this to track the basket
import React from 'react'

import {useContext, createContext, useReducer } from "react";

//This is the data layer
export const StateContext= createContext();

//build a provider
export const StateProvider=({reducer, initialState, children} )=> (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue=() => useContext(StateContext);