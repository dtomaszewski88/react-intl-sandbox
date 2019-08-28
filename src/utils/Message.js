
import React, {createRef} from 'react';
import {FormattedMessage} from "react-intl";
import {
    Alert,
    Badge,
    Button, ButtonGroup,
    InputGroup,
    Dropdown,
    DropdownButton,
    FormControl
} from 'react-bootstrap';
import {random} from "lodash";

const addBadge = (refToElement) => {
    if(!refToElement) return;
    const divNode = document.createElement('div');
    divNode.className = "badge badge-primary";
    divNode.innerText= random(0, 20);
    refToElement.append(divNode)
};

const clearBadges = (refToElement) => {
    if(!refToElement) return;
    refToElement.innerHTML = ''
};

const Message = ({message, onDeleteMessage}) => {
    if(!message){
        return null
    }
    const myRef = createRef();
    const inputRef = createRef();
    const {id} = message;
    return (
        <div className="message" id={id}>
            <Alert variant="info">
                {message.text}
            </Alert>
            <div className="message-header">
                <div className="message-header-left">
                    <ButtonGroup aria-label="Basic example" className="badge-buttons">
                        <Button className="add-badges" size="sm" onClick={() => addBadge(myRef.current) }>Add badge</Button>
                        <Button className="clear-badges" size="sm" onClick={() => clearBadges(myRef.current) }>Clear</Button>
                    </ButtonGroup>
                </div>
                <div className="message-header-center">
                    <input ref={inputRef}/>
                </div>
                <div className="message-header-right">
                    <ButtonGroup aria-label="Basic example" className="badge-buttons">
                        <Button variant="danger" className="add-badges" size="sm" onClick={() => onDeleteMessage(message) }>Delete</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className="message-footer">
                <div className="badges" ref={myRef} />
                <div className="from"><Badge variant="primary"><FormattedMessage id={'FROM'} values={message}/></Badge></div>
            </div>
        </div>
    );
};

export default Message;