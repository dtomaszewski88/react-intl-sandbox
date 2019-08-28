import React from 'react';
import {
    Container
} from 'react-bootstrap';
import {map} from 'lodash';

import Message from './Message'
const MessageListByAuthor = ({messages, onDeleteMessage}) => {
    return (
        <Container>
            {map(messages, (message) => {
                return (
                    <Message message={message} key={message.id} onDeleteMessage={onDeleteMessage}/>
                )
            })}
        </Container>
    );
};

export default MessageListByAuthor;
