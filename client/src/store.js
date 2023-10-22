import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/contactSlice'
import filterReducer from './reducers/filterSlice'

// Redux Thunk: Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
export const store = configureStore({
	reducer: {
		contactsReducer,
		filterReducer
	}
});