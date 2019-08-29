import React, {createRef, useState} from 'react';
import {FormattedMessage} from "react-intl";
import {
    Alert,
    Badge,
    Button, ButtonGroup,
} from 'react-bootstrap';
import {random} from "lodash";
import classNames from 'classnames';

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
    const [selected, setSelected] = useState(false);
    if(!message){
        return null
    }
    const myRef = createRef();
    const inputRef = createRef();
    const toggleSelected = () => setSelected(!selected);
    const {id} = message;
    const classes = classNames('message', {selected});
    const variant = selected ? 'primary' : 'info';
    return (
        <div className={classes} id={id} onClick={toggleSelected}>
            <Alert variant={variant}>
                <Alert.Heading>{message.title}</Alert.Heading>
                {message.text}
            </Alert>
            <div className="message-header">
                <div className="message-header-left">
                    <ButtonGroup aria-label="Basic example" className="badge-buttons"  onClick={evt => evt.stopPropagation()}>
                        <Button className="add-badges" size="sm" onClick={() => addBadge(myRef.current) }>Add badge</Button>
                        <Button className="clear-badges" size="sm" onClick={() => clearBadges(myRef.current) }>Clear</Button>
                    </ButtonGroup>
                </div>
                <div className="message-header-center">
                    <input ref={inputRef}  onClick={evt => evt.stopPropagation()} />
                </div>
                <div className="message-header-right">
                    <ButtonGroup aria-label="Basic example" className="badge-buttons"  onClick={evt => evt.stopPropagation()}>
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