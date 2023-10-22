import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addContact } from '../actions/contactAction';
import AddContactsCSS from './AddContacts.module.css';

export default function AddContacts() {
    const dispatch = useDispatch();
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [err, setErr] = useState("")
    const navigation = useNavigate();

    const createContact = (e) => {
        e.preventDefault();
        if (!fName)
            setErr("Please add name")
        else if (!email)
            setErr("Please add e-mail")
        else if (!phone)
            setErr("Please add phone number")
        else {
            dispatch(addContact({
                name: `${fName} ${lName}`,
                email: email,
                phone: phone
            }));
            navigation("/")
        }
    }
    return (
        <div className="card border-0 shadow m-3">
            <div className={["card-header text-white text-center fw-bolder", AddContactsCSS.headTitle].join(" ")}>Add Your Contact</div>
            <div className="card-body">
                {!err ? "" : <div className="alert alert-danger" role="alert">{err}</div>}
                <form onSubmit={e => createContact(e)}>
                    <div className={["form-group", AddContactsCSS.halfWidth].join(" ")}>
                        <label >First Name</label>
                        <input type="text" value={fName} onChange={(e) => setFName(e.target.value)} className="form-control" />
                    </div>
                    <div className={["form-group", AddContactsCSS.halfWidth].join(" ")}>
                        <label >Last Name</label>
                        <input type="text" value={lName} onChange={(e) => setLName(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label >Enter Your Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label >Enter Your Phone No</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-2">Create New</button>
                </form>
            </div>
        </div>
    )
}
