1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, Filter, Reduce. Object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects containg the type of action to be dispatched in a reducer, and the data or "payload" the reducer needs to change state. Reducers change state by receiving actions and handling all changes by using switches. It's a single source because there is only one object that the store uses and that all container/view compoents connect to.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is one state for all connected components, and component state only exists within that one component. Input forms are good for component state. Data for lists are better for application state.

1.  What is middleware?

Middleware are functions that are used between other functions. For example in redux you can log all actions before and after they pass through our reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows us create async actions that fetch data from outside then are dispatched upon a promises reponse. Our action creators go from returning objects to returning functions that take dispatch as a parameter.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
