import React from 'react';
import PropTypes from 'prop-types'
import { Header, Image, Table } from 'semantic-ui-react'
import Batman from '../../images/icons/Batman.svg'
import Beach from '../../images/icons/Beach.svg'
import Alien from '../../images/icons/Alien.svg'


const images = [Batman, Beach, Alien]

const ChatList = ({chats}) => {  
  return (
    <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Chats</Table.HeaderCell>
          <Table.HeaderCell>Members</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {chats.map((chat, idx) => 
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={images[idx]} size='mini' />
                <Header.Content>
                  {chat.name}
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              {chat.chatroom_users.length}
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

ChatList.propTypes = {  
  chats: PropTypes.array.isRequired
};

export default ChatList


