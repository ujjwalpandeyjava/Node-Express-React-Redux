import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from '../actions/contactAction';
import EachContact from './EachContact';

export default function Contacts() {
	const dispatch = useDispatch();
	const contacts = useSelector(state => state.contactsReducer.contacts)    // from redux
	useEffect(() => {
		// console.log("Contact useEffect...");
		dispatch(fetchAllContacts())	// Populate the state from DB
	}, [])

	return (
		<div>
			{contacts.length < 1 ? <h2 style={{ marginTop: "2em", textAlign: "center" }}>Add NewContact</h2> :
				<table className="table shadow">
					<thead className="bg-danger text-white">
						<tr>
							<th scope="col">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="customCheck1" />
									<label className="custom-control-label"  ></label>
								</div>
							</th>
							<th scope="col">Name</th>
							<th scope="col">Phone No</th>
							<th scope="col">Email</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{contacts ? contacts.map(contact => {
							return (<EachContact contact={contact} key={contact ? contact._id : ""} />)
						}) : "No contact"}
					</tbody>
				</table>}
		</div>
	)
}