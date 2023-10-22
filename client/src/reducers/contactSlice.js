import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: 'contacts',
	initialState: {
		contacts: [{
			_id: nanoid(),
			name: "This is hard coded: Ujjwal 001",
			phone: "987654321",
			email: "pandey@gmail.com"
		}],
		fullDetailedContact: null
	},
	reducers: {
		FETCH_ALL_CONTACT: (state, action) => {
			state.contacts = []
			state.contacts.push(...action.payload.contacts)
		},
		CREATE_CONTACT(state, action) {
			console.warn(action.payload.addedContact);
			state.contacts = [...state.contacts, action.payload.addedContact]
			// or
			// state.contacts.push(action.payload.addedContact);
		},
		GET_CONTACT(state, action) {
			state.fullDetailedContact = action.payload;
		},
		UPDATE_CONTACT(state, action) {
			state.contacts = state.contacts.map(contact => contact._id === action.payload._id ? action.payload : contact)
		},
		DELETE_CONTACT(state, action) {
			state.contacts = state.contacts.filter(contact => contact._id !== action.payload)
		}
	}
});

export const { FETCH_ALL_CONTACT, CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } = todoSlice.actions;
export default todoSlice.reducer;