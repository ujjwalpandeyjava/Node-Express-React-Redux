import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
	name: 'filter',
	initialState: [],
	reducers: {
		filterAdded(state, action) {
			state.push({
				id: action.payload.id,
				text: action.payload.text,
				completed: false
			})
		},
		filterToggled(state, action) {
			const todo = state.find(todo => todo.id === action.payload)
			todo.completed = !todo.completed
		}
	}
});

export const { filterAdded, filterToggled } = filterSlice.actions;
export default filterSlice.reducer;