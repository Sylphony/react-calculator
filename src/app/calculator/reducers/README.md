# Reducer
Reducers are functions used for the actual changing of the state.

Reducers tend to have two parameters: `state` and `action`.  Actions dispatched will affect all reducers.  Using a `switch` or conditional `if` statements and detecting the type of action performed (`action.type`), whatever needs to be changed will be done, updated and will return the new state.

The `state` should have some initial state assigned, even if it is just something empty.

Since `state` is immutable, nothing in the `state` object should be changed directly.  Each time there is a need to update the state, the previous state must be passed first, which is easily done using ES6's spread operator.  Once the previous `state` is passed, then any changes in a state can be changed at the same time.

Each reducer must return something, even if it is just the previous state.
