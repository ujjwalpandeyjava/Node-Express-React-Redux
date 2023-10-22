import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AddContacts from './components/AddContacts';
import Contacts from './components/Contacts';
import DetailedContact from './components/DetailedContact';
import EditContact from './components/EditContact';
import Navbar from './components/Navbar';
import { store } from './store';
import './styles/App.scss';
import './styles/index.scss';

// Run app: npm run start
// https://reactrouter.com/en/main/router-components/browser-router
// basename is caseInSensitive
// Redux Toolkit includes Redux core, as well as other key packages essential for building Redux applications (such as Redux Thunk and Reselect).
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <BrowserRouter basename="contactApp">
      <Provider store={store}>  {/* Redux */}
        <Navbar />
        <div className='BodyOfContactApp'>
          <Routes> {  /* Switch in v5, Routes in v6 */}
            <Route path="/" element={<Contacts />} />
            <Route path="contact/details/:id" element={<DetailedContact />} />
            <Route path="contact/add" element={<AddContacts />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>

    {/* Not using */}
    <BrowserRouter basename="baseApp2">
      <Provider store={store}>  {/* Redux */}
        <Navbar />
        <div className='BodyOfBaseApp2' style={{ marginTop: "0em" }}>
          <Routes> {/* Switch in v5, Routes in v6 */}
            <Route path="/" element={<Contacts />} />
            <Route path="/add" element={<AddContacts />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
    {/* 
    <BrowserRouter basename=''>
      APP home page....
    </BrowserRouter> */}
  </Fragment>
);