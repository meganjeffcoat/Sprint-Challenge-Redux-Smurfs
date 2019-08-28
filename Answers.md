1. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as      a 'single source of truth' in a redux application?

    Actions are information that contain an action type and data that you want associated with the specific action type you are going for.
    Reducers are used to calculate a new version of state which is based on the current state and a specific action. They are pure functions.
    The store contains state and all changes go through the store. These changes are never made within the store itself.
    The store is known as a 'single source of truth' because it holds our orginal state.

2. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is immutable while component state can become jumbled and a complete mess.  Small scale applications can still use component state because there is not as much state that needs to be managed.

3. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    Redux-thunk is a middleware that makes reducers which are synchronus become asynchronous.   It is also a function that returns another function.
