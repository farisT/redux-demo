import React, { Component } from 'react';
import { createStore } from 'redux';


class ReduxDemo  extends Component {
    render() {
    

        //Step 2: Reducer : stand and action
        const reducer = (state,action) => {
            if(action.type === "ATTACK") {
                return action.payload //payload can be anything
            }
            if(action.type === "GREENATTACK") {
                return action.payload //payload can be anything
            }
            return state;
        }

        //Step 1 Store : reducer and state


        const store = createStore(reducer,"peace") // "peace" should/could actually be an object
        




        //Step 3: Subscribe

        store.subscribe(() => {
            console.log("Store is now", store.getState()) // this function will get the new state of the store
        })

        //Step 4: Dispatch action
        //usually an object

        store.dispatch({type:"ATTACK", payload:"Iron Man"})
        store.dispatch({type:"GREENATTACK", payload:"HULK"})

        return ( 
            <div>
                test
            </div>
         );
    }
}
 
export default ReduxDemo ;