import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';
import {Avatar} from '@material-ui/core'

export default function Contacts() {
  const { contacts } = useContacts()

  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id} style={{display:"flex"}}>
          <Avatar className="mx-2" /> {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
