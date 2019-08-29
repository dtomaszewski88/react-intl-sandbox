import React from 'react';
import {
    Container
} from 'react-bootstrap';
import {map} from 'lodash';

import Message from './Message'
const MessageListById = ({messages, onDeleteMessage}) => {
    return (
        <Container>
            {map(messages, (message) => {
                return (
                    <Message message={message} key={message.from} onDeleteMessage={onDeleteMessage}/>
                )
            })}
        </Container>
    );
};

export default MessageListById;
