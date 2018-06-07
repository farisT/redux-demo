import React, { Component } from 'react';
import { createStore } from 'redux';


class ReduxDemo  extends Component {
    render() {
    

        //!!Step 1: Reducer : stand and action
        //state takes two things what state is and what action to perform when the state is changed
        //reducer needs to go in seperate folder!!!

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


        const store = createStore(reducer,"peace") // "peace" is our current state 
        //reducer does whatever its told to do

        //Step 3: Subscribe

        store.subscribe(() => {
            console.log("Store is now", store.getState()) // this function will get the new state of the store
        })

        //Step 4: Dispatch action
        //usually an object
        //The dispatch is also in its own folder 
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