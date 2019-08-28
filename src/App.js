import React from 'react';
import {FormattedMessage, IntlProvider} from "react-intl";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import {map, slice, times} from 'lodash'
import {
    Container,
    ButtonGroup,
    Button,
    Row,
    Col
} from 'react-bootstrap';
import messagesData from './messages'
import {getMessage, getMessageTranslationData} from './utils/messages.utils'

import MessageListByAuthor from './utils/MessageListByAuthor'
import MessageListById from './utils/MessageListById'
import MessageListByIndex from './utils/MessageListByIndex'
import MessageListByNoKey from './utils/MessageListByNoKey'

import enMessages from './translation-keys/en.js'
import plMessages from './translation-keys/pl.js'

const intlMessages = {
    en: enMessages,
    pl: plMessages
};

function App() {
    const [messages, setMessages] = React.useState(messagesData);
    const [summary, setSummary] = React.useState(1);
    const [locale, setLocale] = React.useState('en');
    const [messageList, setMessageList] =  React.useState('nokey');
    const deleteMessage = msg => {
        const newMessages = messages.filter(message => message.id !== msg.id);
        setMessages(newMessages)
    }

    const removeMessageHead = () => {
        const newMessages = slice(messages, 1, messages.length );
        setMessages(newMessages)
    };
    const removeMessageTail = () => {
        const newMessages = slice(messages, 0, messages.length - 1);
        setMessages(newMessages)
    };
    const addMessageHead = () => {
        const newMessages = [getMessage(), ...messages];
        setMessages(newMessages)
    };

    const addMessageTail = () => {
        const newMessages = [...messages, getMessage()];
        setMessages(newMessages)
    };
    const resetWithCount = (count) => {
        const newMessages = times(count, getMessage);
        setMessages(newMessages)
    };
    const reset = () => {
      setMessages([])
    };

    const isActive = (key, value) => {return value === key ? 'primary' : 'secondary'};
    const messageTranslationData = getMessageTranslationData(messages);
    return (
        <IntlProvider locale={locale} messages={intlMessages[locale]}>
            <div className="App">
                <header className="App-header" />
                <main>
                    <h1 className="app-title"><FormattedMessage id={'Translations demo'} /></h1>
                    <Container>
                        <Row>
                            <Col className="buttons">
                            <ButtonGroup aria-label="Basic example">
                                <Button variant={isActive(messageList,'nokey')} onClick={() => setMessageList('nokey')}> No key </Button>
                                <Button variant={isActive(messageList,'index')} onClick={() => setMessageList('index')}> Index </Button>
                                <Button variant={isActive(messageList,'author')} onClick={() => setMessageList('author')}> Author </Button>
                                <Button variant={isActive(messageList,'id')} onClick={() => setMessageList('id')}> Id </Button>
                            </ButtonGroup>
                            </Col>
                            <Col className="buttons">
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant={isActive(locale,'en')} onClick={() => setLocale('en')}>EN</Button>
                                    <Button variant={isActive(locale,'pl')} onClick={() => setLocale('pl')}>PL</Button>
                                </ButtonGroup>
                            </Col>
                            <Col className="buttons">
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant={isActive(summary,1)} onClick={() => setSummary(1)}> 1</Button>
                                    <Button variant={isActive(summary,2)} onClick={() => setSummary(2)}> 2</Button>
                                    <Button variant={isActive(summary,3)} onClick={() => setSummary(3)}> 3</Button>
                                    <Button variant={isActive(summary,4)} onClick={() => setSummary(4)}> 4</Button>
                                    <Button variant={isActive(summary,5)} onClick={() => setSummary(5)}> 5</Button>
                                    <Button variant={isActive(summary,6)} onClick={() => setSummary(6)}> 6</Button>
                                    <Button variant={isActive(summary,7)} onClick={() => setSummary(7)}> 7</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="message-summary">
                        <h4>
                            {{
                                1: <span><FormattedMessage id={'MESSAGE_SUMMARY_1'} />{`: ${messageTranslationData.messageCount}`}</span>,
                                2: <FormattedMessage id={'MESSAGE_SUMMARY_2'} values={messageTranslationData}/>,
                                3: <FormattedMessage id={'MESSAGE_SUMMARY_3'} values={messageTranslationData}/>,
                                4: <FormattedMessage id={'MESSAGE_SUMMARY_4'} values={messageTranslationData}/>,
                                5: <FormattedMessage id={'MESSAGE_SUMMARY_5'} values={messageTranslationData}/>,
                                6: <FormattedMessage id={'MESSAGE_SUMMARY_6'} values={messageTranslationData}/>,
                                7: <FormattedMessage id={'MESSAGE_SUMMARY_7'} values={messageTranslationData}/>
                            }[summary]}
                        </h4>
                    </Container>
                    <Container>
                        <Row>
                            <Col className="buttons">
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="primary" onClick={() => addMessageHead()}>Add (head)</Button>
                                    <Button variant="primary" onClick={() => addMessageTail()}>Add (tail)</Button>
                                    <Button variant="primary" onClick={() => removeMessageHead()}>Remove (head)</Button>
                                    <Button variant="primary" onClick={() => removeMessageTail()}>Remove (tail)</Button>
                                    <Button variant="primary" onClick={() => reset()}>Reset</Button>
                                    <Button variant="primary" onClick={() => resetWithCount(5)}>Reset 5</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Container>
                    {{
                        'id': <MessageListByAuthor messages={messages} onDeleteMessage={deleteMessage}/>,
                        'author': <MessageListById messages={messages} onDeleteMessage={deleteMessage}/>,
                        'index': <MessageListByIndex messages={messages} onDeleteMessage={deleteMessage}/>,
                        'nokey': <MessageListByNoKey messages={messages} onDeleteMessage={deleteMessage}/>,
                    }[messageList]}
                </main>
        </div>
      </IntlProvider>
    );
}

export default App;
