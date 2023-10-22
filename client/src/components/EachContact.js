import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../actions/contactAction';

export default function EachContact({ contact }) {
	const dispatch = useDispatch();
	const { _id, name, phone, email } = contact ? contact : "";
	return (
		<tr >
			<th>
				<div className="custom-control custom-checkbox">
					<input type="checkbox" className="custom-control-input" />
					<label className="custom-control-label"></label>
				</div>
			</th>
			<td><Link to={`contact/details/${_id}?enableEdit=false`} ><Avatar name={name} size="40" round={true} className="mr-2" /></Link> {name}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td className="actions">
				<Link to={`/contact/details/${_id}?enableEdit=true`} className="mr-4">
					<button><span className="fas fa-edit">Edit</span></button>
				</Link>
				<Link to="#" onClick={() => dispatch(deleteContact(_id))}>
					<button><span className="fas fa-trash text-danger">Delete</span></button>
				</Link>
			</td>
		</tr >
	)
}