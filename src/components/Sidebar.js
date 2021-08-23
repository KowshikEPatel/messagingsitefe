import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import {IconButton} from '@material-ui/core'
import Chat from '@material-ui/icons/Chat'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

//, import DonutLargeIcon from '@material-ui/icons/DonutLarge'
//import MoreVertIcon from '@material-ui/icons/MoreVert'
//import  {SearchOutlined}  from '@material-ui/icons'


export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
  const [modalOpen, setModalOpen] = useState(false)
  const conversationsOpen = activeKey === CONVERSATIONS_KEY
  
  function closeModal() {
    setModalOpen(false)
  }

  function handleIdClick(){
    navigator.clipboard.writeText(id)
  }

  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>
              <IconButton>
                <Chat/>
              </IconButton>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>
              <IconButton>
                <ContactPhoneIcon/>
              </IconButton>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small" onClick={handleIdClick}>
          Your Id (click to copy): <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ?
          <NewConversationModal closeModal={closeModal} /> :
          <NewContactModal closeModal={closeModal} />
        }
      </Modal>
    </div>
  )
}
