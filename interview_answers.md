# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
- the headache that prop drilling can cause, it makes it much more global and easier to access base props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- actions are functions you can call to use the reducers. Reducers are cases we use that take the information passed through the action and put them to state. Store is where all of our state is stored to access throughout the app.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
- it allows us to do async functions such as an axios call. It makes it so we can apply it to our actions for our reducers to set to state.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
- I think my favorite is context api, just because it's super straight forward and simple, however I think redux is possibly much more useful in the long run and feels definitely more organized.