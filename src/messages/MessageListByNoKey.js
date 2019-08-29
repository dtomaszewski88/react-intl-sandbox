import React from 'react';
import {
    Container
} from 'react-bootstrap';
import {map} from 'lodash';

import Message from './Message'
const MessageListNoKey = ({messages, onDeleteMessage}) => {
    return (
        <Container>
            {map(messages, (message) =>  <Message message={message} onDeleteMessage={onDeleteMessage}/>)}
        </Container>
    );
};

export default MessageListNoKey;
