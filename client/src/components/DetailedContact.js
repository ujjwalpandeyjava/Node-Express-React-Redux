import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getContact } from '../actions/contactAction';
import EditDetail from './EditDetail';
import ViewDetail from './ViewDetail';

function DetailedContact() {
	const parameters = useParams();
	const dispatch = useDispatch();
	const contactWithFullDetail = useSelector(state => state.contactsReducer.fullDetailedContact)
	const urlParams = new URLSearchParams(window.location.search);
	useEffect(() => {
		dispatch(getContact(parameters.id));
	}, [])
	return (
		!contactWithFullDetail ? <h2 align="center">Detail Not found</h2> :
			urlParams.get("enableEdit") === 'true' ?
				<EditDetail contactWithFullDetail={contactWithFullDetail} id={parameters.id} /> :
				<ViewDetail contactWithFullDetail={contactWithFullDetail} id={parameters.id} />
	)
}

export default DetailedContact