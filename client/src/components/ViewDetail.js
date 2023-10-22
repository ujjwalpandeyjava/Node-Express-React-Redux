import React from 'react'
import Avatar from 'react-avatar'
import { Pencil } from 'react-bootstrap-icons'
import DetailedContactCSS from './DetailedContact.module.css';
import { useNavigate } from 'react-router';

function ViewDetail({ contactWithFullDetail, id }) {
	const navigator = useNavigate();
	return (
		<div className={DetailedContactCSS.fullContactContainer}>

			<Pencil size={27} className={DetailedContactCSS.editPencilIcon} onClick={() => navigator(`/contact/details/${id}?enableEdit=true`)} />

			<div><Avatar name={contactWithFullDetail.name} size="150" round={true} className="mr-2" /></div>

			<div className={DetailedContactCSS.sections}>
				<div className={DetailedContactCSS.sectionGroup}>
					<label>Id:</label>
					<div className={DetailedContactCSS.values}>{contactWithFullDetail._id}</div>
				</div>
				<div className={DetailedContactCSS.sectionGroup}>
					<label>Name:</label>
					<div className={DetailedContactCSS.values}>{contactWithFullDetail.name}</div>
				</div>
				<div className={DetailedContactCSS.sectionGroup}>
					<label>E-mail:</label>
					<div className={DetailedContactCSS.values}>{contactWithFullDetail.email}</div>
				</div>
				<div className={DetailedContactCSS.sectionGroup}>
					<label>phone:</label>
					<div className={DetailedContactCSS.values}>{contactWithFullDetail.phone}</div>
				</div>
			</div>
		</div>
	)
}

export default ViewDetail