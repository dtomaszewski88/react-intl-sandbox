import React from 'react';
import {
    Container
} from 'react-bootstrap';
import {map} from 'lodash';

import Message from './Message'
const MessageListByIndex = ({messages, onDeleteMessage}) => {
    return (
        <Container>
            {map(messages, (message, index) => {
                return (
                    <Message message={message} key={index} onDeleteMessage={onDeleteMessage}/>
                )
            })}
        </Container>
    );
};

export default MessageListByIndex;
