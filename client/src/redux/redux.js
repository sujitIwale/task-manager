import todoReducer from './todo/todoReducer';

const { createStore } = 'redux';

const store = createStore(todoReducer);

export default store;
