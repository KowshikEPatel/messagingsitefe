import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          MessagingApp
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <div className="d-flex" style={{ height: '92vh' }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
    </>
  )
}
