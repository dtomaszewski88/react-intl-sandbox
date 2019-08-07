import React from 'react';
import {FormattedMessage, IntlProvider} from "react-intl";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import {map, random, slice, chain} from 'lodash'
import {
    Container,
    ButtonGroup,
    Button,
    Alert,
    Badge,
    Row,
    Col
} from 'react-bootstrap';
import uuid from 'uuid/v1';
import messagesData from './messages'
import { LoremIpsum } from "lorem-ipsum";
import enMessages from './translation-keys/en.js'
import plMessages from './translation-keys/pl.js'

const intlMessages = {
    en: enMessages,
    pl: plMessages
};
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

const names = [
    'Kate',
    'John',
    'Jane',
    'Albert',
    'Brandon',
    'Oliver',
    'Charlie',
    'Thomas',
    'Olivia',
    'Elizabeth',
    'Ava'
];

const getMessage = () => ({
    id: uuid(),
    from: names[random(0, names.length -1)],
    text: lorem.generateSentences(random(1,5))
});


const getMessageTranslationData = (messages) => {
    const maxMessages = 10;
    const authorsUniq = chain(messages).map('from').uniq().value();
    const authorsText = authorsUniq.join(', ');
    const authorsHead = slice(authorsUniq,0,2);
    const authorsTail = slice(authorsUniq,2);
    const authorsTailCount = authorsTail.length;
    const authorsHeadTxt = authorsHead.join(', ');
    const authorsTailTxt = authorsTail[0];
    const authorsCount = authorsUniq.length;
    return {
        messageCount: messages.length,
        messageCountType: messages.length < maxMessages ? 'normal' : 'max',
        maxMessages,
        authorsCount,
        authorsText,
        authorsTailCount,
        authorsHeadTxt,
        authorsTailTxt
    };
}

function App() {
  const [state, setState] = React.useState({messages: messagesData, summary: 1, locale: 'pl'});
  const {messages, summary, locale} = state;

  const setLocale = (locale) => {setState({...state, locale})};
  const removeMessage = () => {setState({...state, messages: slice(messages, 0, messages.length - 1)})};
  const addMessage = () => {setState({...state, messages: [...messages, getMessage()]})};
  const reset = () => {setState({...state, messages: []})};
  const switchSummary = (summary) => {setState({...state, summary: summary})};

  const isActive = (key, value) => {return value === state[key] ? 'primary' : 'secondary'};
  const messageTranslationData = getMessageTranslationData(messages);

  return (
      <IntlProvider locale={locale} messages={intlMessages[locale]}>
    <div className="App">
      <header className="App-header">
      </header>
        <main>
            <h1 className="app-title"><FormattedMessage id={'Translations demo'} /></h1>
            <Container>
                <Row>
                    <Col className="buttons">
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary" onClick={() => removeMessage()}>Remove Message</Button>
                        <Button variant="primary" onClick={() => addMessage()}>Add Message</Button>
                        <Button variant="primary" onClick={() => reset()}>Reset</Button>
                    </ButtonGroup>
                    </Col>
                    <Col className="buttons">
                        <ButtonGroup aria-label="Basic example">
                            <Button variant={isActive('locale','en')} onClick={() => setLocale('en')}>EN</Button>
                            <Button variant={isActive('locale','pl')} onClick={() => setLocale('pl')}>PL</Button>
                        </ButtonGroup>
                    </Col>
                    <Col className="buttons">
                        <ButtonGroup aria-label="Basic example">
                            <Button variant={isActive('summary',1)} onClick={() => switchSummary(1)}> 1</Button>
                            <Button variant={isActive('summary',2)} onClick={() => switchSummary(2)}> 2</Button>
                            <Button variant={isActive('summary',3)} onClick={() => switchSummary(3)}> 3</Button>
                            <Button variant={isActive('summary',4)} onClick={() => switchSummary(4)}> 4</Button>
                            <Button variant={isActive('summary',5)} onClick={() => switchSummary(5)}> 5</Button>
                            <Button variant={isActive('summary',6)} onClick={() => switchSummary(6)}> 6</Button>
                            <Button variant={isActive('summary',7)} onClick={() => switchSummary(7)}> 7</Button>
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
                {map(messages, (message) => {
                    return <div className="message"  key={message.id}>
                        <Alert variant="info">
                            {message.text}
                            </Alert>
                        <div className="from"><Badge variant="primary"><FormattedMessage id={'FROM'} values={message}/></Badge></div>
                    </div>
                })}
            </Container>
        </main>
    </div>
      </IntlProvider>
  );
}

export default App;
