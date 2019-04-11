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
