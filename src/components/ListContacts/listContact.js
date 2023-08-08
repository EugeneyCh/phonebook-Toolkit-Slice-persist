import React from 'react';
import { useSelector } from 'react-redux';
import css from './ListContacts.module.css';

function ListContact({ children }) {
  useSelector(state => console.log(state));
  return <ul className={css.contactList}>{children}</ul>;
}

export default ListContact;
