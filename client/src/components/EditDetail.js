import React, { useEffect, useRef } from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { updateContact } from '../actions/contactAction';
import DetailedContactCSS from './DetailedContact.module.css';

function EditDetail({ contactWithFullDetail, id }) {
	const contactID = useRef();
	const nameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();

	const dispatch = useDispatch();
	const navigator = useNavigate();

	const saveDetails = () => {
		let newDetails = {
			_id: contactID.current.value,
			name: nameRef.current.value,
			email: emailRef.current.value,
			phone: phoneRef.current.value
		}
		dispatch(updateContact(newDetails._id, newDetails));
		navigator(`/contact/details/${id}?enableEdit=false`)
	}

	useEffect(() => {
		contactID.current.value = contactWithFullDetail._id
		nameRef.current.value = contactWithFullDetail.name
		emailRef.current.value = contactWithFullDetail.email
		phoneRef.current.value = contactWithFullDetail.phone
	}, [])

	return (
		<div className={DetailedContactCSS.fullContactContainer}>
			<Link className={DetailedContactCSS.editPencilIcon} onClick={() => saveDetails()} >Save</Link>

			<div><Avatar name={contactWithFullDetail.name} size="150" round={true} className="mr-2" /></div>

			<div className={DetailedContactCSS.sections}>
				<div className={DetailedContactCSS.sectionGroup}>
					<label>Id:</label>
					<input type='text' className={DetailedContactCSS.values} ref={contactID} readOnly />
				</div>
				<div className={DetailedContactCSS.sectionGroup}>
					<label>Name:</label>
					<input type='text' className={DetailedContactCSS.values} ref={nameRef} />
				</div>
				<div className={DetailedContactCSS.sectionGroup}>
					<label>E-mail:</label>
					<input type='email' className={DetailedContactCSS.values} ref={emailRef} />
				</div>
				<div className={DetailedContactCSS.sectionGroup}>
					<label>phone:</label>
					<input type='text' className={DetailedContactCSS.values} maxLength={10} ref={phoneRef} />
				</div>
			</div>
		</div>
	)
}

export default EditDetail;