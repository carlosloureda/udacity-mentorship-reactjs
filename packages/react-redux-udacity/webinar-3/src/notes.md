Module 2. Redux. Webinar 3. Hello World Example. Added base code

> Adding Redux
> State --> Store

    - yarn add redux

    - Add:
        import { createStore } from "redux";
        const store = createStore(); // an incomplete solution
            - createStore --> Factory function. 1st arg: 'Reducer'
    - Store & Reducer:
        - The cashier makes some checking and operations before giving us the money
        - The Store and the Reducer are great buddies. Always in sync.
        - The REDUCER always “talks” to the STORE. Just like the Cashier stays in sync with the Vault.
        - This explains why the creation of the store needs to be invoked with a Reducer, and that is mandatory. The Reducer is the only mandatory argument passed into createStore()
    - The Reducer:
        - In more technical terms, a reducer is also called a reducing function. You may not have noticed, but you probably already use a reducer - if you’re conversant with the Array.reduce() method.
        - It is a popular way to get the sum of values in a Javascript Array.
            let arr = [1,2,3,4,5]
            let sum = arr.reduce((x,y) => x + y)
            console.log(sum)
            //15
        - A reduce() function receives 2 args but what args?
            - The function is in reality the 'x+y', so the Array.reduce is the one
            which passes x,y args to the funtion, this is what thas createStore() in its inners, remember the `create_store_code.js`
            - So the syntax is:
                > const store = createStore(reducer);
        - Create first reducer in /src/reducers/index.js
            - For a Redux Reducer, you always return the NEW STATE of your application, remeber that after withdrawing in the cashier you need to have the new amount in sync between the cashier and the vault.
        - Content of the reducer:
            export default state => {
                return state;
            };
    - 2nd argument for createStore ??
        - First time in the bank you created a bank account, maybe with an initial deposit or not.

            In Redux terms, this is called the initialState of the app.
            Thinking in code, initialState is the second argument passed into the
            createStore function call.
            const store = createStore(reducer, initialState);

    - Remove the state and the this.state.name
        - The createStore gives as the getState method.
        - In our case, store.getState() will return the object, { name: "Everyone"} since
            this is the INITIAL STATE we passed into the createStore() method when we
            created the STORE.

> Conclusion and Summary

        This chapter has been exciting. We focused mostly on setting a decent foundation
        for the more interesting things to come.
        Here are a few things you learned in this chapter:
        - Redux is a predictable state container for JavaScript apps.
        - The createStore factory function from Redux is used to create a
        Redux STORE
        - The Reducer is the only mandatory argument passed into
        createStore()
        - A REDUCER is just a function. A function that takes in two parameters.
        The first being the STATE of the app, and the other being an ACTION
        - A Reducer always returns the NEW STATE of your application.
        - The INITIAL STATE of your application, initialState is the second
        argument passed into the createStore function call.
        - Store.getState() will return the current state of your application.
        Where Store is a valid Redux STORE.

> Let's add some Actions!

    - Let's change the name -> Need to tell the CASHIER our WITHDRAWAL_MONEY action.
      Is the store who dispatches the actions.

    - Describe an action:

        {
            type: " ",
            payload: {}
        }
    - Add styling and buttons
    - Since we intend to update the state of the application, whenever any of the buttons
        is clicked, we must dispatch an action.
    -  We have 3 names:
        {
            type: "SET_NAME",
            text: "Everyone"
        }
        {
            type: "SET_NAME",
            text: "Carlos"
        }
        {
            type: "SET_NAME",
            text: "from Redux"
        }
        We are repeating a lot of code (against DRY!), so we can simplify with some action creators.

        const setName = text => ({type: "SET_NAME", name: text})

        > Create the /src/actions/index.js
        > Create the /src/store/index.js
        > Moved buttons to a new component
        > Added the action creator inside the /src/actions
        > Added action 2nd argument to the /src/reducers and log the action

    - Nothig works as imagened as the reducer just returns the same state.

        > action: {type: "@@redux/INITn.2.y.a.e.a"}

            Well, do not concern yourself so much about that. It is an action passed by Redux itself when setting up your app. It is usually called the Redux init action, and it is
            passed into the reducer when Redux initialises your application with the initial state of the app.
        > Create reducer
            - We see that on console the state changes .. but not in the view
    -
