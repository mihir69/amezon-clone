import React, {createContext,useContext,useReducer} from 'react';

export const StateContext = createContext();
 export const StateProvider = ({reducer,initialState,children}) =>{
   const [global,dispatch] =  useReducer(reducer,initialState) 
     return(
         <StateContext.Provider value={[global,dispatch]}>
             {children}
         </StateContext.Provider>
     )
 }
 export const useStateValue = () =>  useContext(StateContext);