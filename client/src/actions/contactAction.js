import { CREATE_CONTACT, DELETE_CONTACT, FETCH_ALL_CONTACT, GET_CONTACT, UPDATE_CONTACT } from '../reducers/contactSlice';
import api from './api';

export const fetchAllContacts = () => (dispatch) => {
	api.Contacts().fetchAll()
		.then(res => {
			dispatch(FETCH_ALL_CONTACT({ contacts: res.data }))
		})
		.catch(err => {
			console.log(err)
			if (err.code === "ERR_NETWORK") {
				console.log("Send to the");
			}
		})
}

//ADD CONTACT
export const addContact = (contact) => (dispatch) => {
	api.Contacts().create(contact)
		.then(res => {
			console.log("addContact: ", res)
			dispatch(CREATE_CONTACT({ addedContact: res.data }));
		})
		.catch(err => console.log(err))
};

//GET CONTACT BY ID
export const getContact = (id) => (dispatch) => {
	console.log("Inside the get Contact");
	api.Contacts().fetchById(id)
		.then((response) => {
			console.log(response.data);
			dispatch(GET_CONTACT(response.data));
		})
		.catch(() => {

		})
};

//UPDATE BY ID
export const updateContact = (id, data) => (dispatch) => {
	console.log(id, data);
	api.Contacts().update(id, data)
		.then(res => {
			dispatch(UPDATE_CONTACT(res.data))
			dispatch(GET_CONTACT(res.data))
		})
		.catch(err => console.log(err))
}

//DELETE BY ID
export const deleteContact = (id) => {
	return (dispatch) => {
		console.log("deleteContact", dispatch, id);
		api.Contacts().delete(id)
			.then(res => {
				console.log("Delete resp:", res);
				if (res.status === 200) {
					dispatch(DELETE_CONTACT(res.data.removedContact._id));
				}
			})
			.catch(err => console.log(err))
	}
}
